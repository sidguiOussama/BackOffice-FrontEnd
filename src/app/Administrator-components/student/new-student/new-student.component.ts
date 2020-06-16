import { Component, OnInit } from '@angular/core';
import {StudentService} from '../../../services/student.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {init} from 'protractor/built/launcher';
import {Student} from '../../../models/Student.module';
import {AccountService} from '../../../services/account.service';
import {SchoolService} from '../../../services/school.service';
import {Account} from '../../../models/Account.module';
import {School} from '../../../models/School.module';
import ObjectID from 'bson-objectid';
import {Subscription} from 'rxjs';
import {AdministratorService} from '../../../services/administrator.service';
import {Level} from '../../../models/Level.module';
import {LevelService} from '../../../services/level.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  studentForm: FormGroup;
  student: Student;
  levels: Level[] = [];
  levelSubscription: Subscription;
  constructor(private studentService: StudentService, private  accountService: AccountService,
              private levelService: LevelService, private administratorService: AdministratorService ,
              private router: Router) { }

  init() {
    this.administratorService.getAdministratorByUsernameAndPasswordFromDB(localStorage.getItem('username'),
      localStorage.getItem('password')).subscribe(
      (data) => {
        this.levelService.getLevelsBySchoolId(data.account.school);
        this.levelSubscription = this.levelService.levelSubject.subscribe(
          (levels: Level[]) => {
            this.levels = levels;
          }
        );
      }
    );
    this.administratorService.getAdministrators();
    this.studentForm = new FormGroup({
      cne: new FormControl('', Validators.required),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl('', Validators.required),
      level: new FormControl(''),

    });
  }
  ngOnInit(): void {
    this.init();
  }

  OnSubmit() {

    const administrator = this.administratorService.getAdministratorByUsernameAndPassword(localStorage.getItem('username'),
      localStorage.getItem('password'));
    if ( administrator !== undefined) {
      this.student = new Student();
      this.student.cne = this.studentForm.get('cne').value;
      this.student.firstName = this.studentForm.get('firstName').value;
      this.student.lastName = this.studentForm.get('lastName').value;
      this.student.phone = this.studentForm.get('phone').value;
      this.student.email = this.studentForm.get('email').value;
      this.student.address = this.studentForm.get('address').value;
      const level: Level = this.studentForm.get('level').value;
      this.student.level = level;
      const account = new Account();
      account.password = this.student.cne + '123';
      account.userName = this.student.email;
      account.school = administrator.account.school;
      this.accountService.createNewAccount(account).subscribe(
        (data) => {
          alert(JSON.stringify(data));
          this.student.account = data;
          this.studentService.createNewStudent(this.student);
        }
      );
      alert('Bien enregistre ');
      this.router.navigate(['list-student']);
    }else {
      alert('User not exist');
    }
  }
}

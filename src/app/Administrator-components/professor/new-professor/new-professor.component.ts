import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {School} from '../../../models/School.module';
import {Subscription} from 'rxjs';
import {AccountService} from '../../../services/account.service';
import {SchoolService} from '../../../services/school.service';
import {Account} from '../../../models/Account.module';
import {Professor} from '../../../models/Professor.module';
import {ProfessorService} from '../../../services/professor.service';

@Component({
  selector: 'app-new-professor',
  templateUrl: './new-professor.component.html',
  styleUrls: ['./new-professor.component.scss']
})
export class NewProfessorComponent implements OnInit {

  professorForm: FormGroup;
  professor: Professor;
  schoools: School[] = [];
  schooolSubscription: Subscription;
  constructor(private professorService: ProfessorService, private  accountService: AccountService,
              private schoolService: SchoolService) { }

  init(){

    this.schoolService.getSchools();
    this.schooolSubscription = this.schoolService.schoolSubject.subscribe(
      (schools: School[]) => {
        this.schoools = schools;
      }
    );
    this.professorForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      school: new FormControl('')
    });
  }
  ngOnInit(): void {
    this.init();
  }

  OnSubmit(){
    this.professor = new Professor();
    this.professor.firstName = this.professorForm.get('firstName').value;
    this.professor.lastName = this.professorForm.get('lastName').value;
    this.professor.phone = this.professorForm.get('phone').value;
    this.professor.email = this.professorForm.get('email').value;
    const s: School = this.professorForm.get('school').value;
    alert('vous avez choisi ' + JSON.stringify(s.name + '   ' + s.webSite));
    const account = new Account();
    account.password = this.professor.firstName + '123';
    account.userName = this.professor.email;
    account.school = this.schoools[0];
    this.accountService.createNewAccount(account).subscribe(
      (data) => {
        alert(JSON.stringify(data));
        this.professor.account = data;
        this.professorService.createNewProfessor(this.professor);
      }
    );
    alert(JSON.stringify(this.professor));
  }

}

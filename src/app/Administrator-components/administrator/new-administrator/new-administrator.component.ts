import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {School} from '../../../models/School.module';
import {Subscription} from 'rxjs';
import {AdministratorService} from '../../../services/administrator.service';
import {SchoolService} from '../../../services/school.service';
import {AccountService} from '../../../services/account.service';
import {Router} from '@angular/router';
import {Administrator} from '../../../models/Administrator.module';
import {Account} from '../../../models/Account.module';

@Component({
  selector: 'app-new-administrator',
  templateUrl: './new-administrator.component.html',
  styleUrls: ['./new-administrator.component.scss']
})
export class NewAdministratorComponent implements OnInit {

  administratorForm: FormGroup;
  list: School[] = [];
  listSubscription: Subscription;

  constructor(public administratorService: AdministratorService,
              public schoolService: SchoolService,
              public accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
    this.init();
    this.listSubscription = this.schoolService.schoolSubject.subscribe(
      (schools: School[]) => {
        this.list = schools;
      }
    );
    this.schoolService.getSchools();
  }

  init(): void {

    this.administratorForm = new FormGroup({
      lastName: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      schoolName: new FormControl('', Validators.required),
      schoolPhone: new FormControl('', Validators.required),
      schoolWebSite: new FormControl('', Validators.required),
      schoolAddress: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    const administrator = new Administrator();
    administrator.lastName = this.administratorForm.get('lastName').value;
    administrator.firstName = this.administratorForm.get('firstName').value;
    administrator.email = this.administratorForm.get('email').value;
    administrator.phone = this.administratorForm.get('phone').value;
    const school = new School();
    school.name = this.administratorForm.get('schoolName').value;
    school.phone = this.administratorForm.get('schoolPhone').value;
    school.webSite = this.administratorForm.get('schoolWebSite').value;
    school.address = this.administratorForm.get('schoolAddress').value;

    const account = new Account();
    account.userName = administrator.email;
    account.password = this.administratorForm.get('password').value;
    this.schoolService.createNewSchool(school).subscribe(
      (data) => {
          account.school = data;
          this.accountService.createNewAccount(account).subscribe(
            (data2) => {
              alert(JSON.stringify(data2));
              administrator.account = data2;
              this.administratorService.createNewAdministrator(administrator);
              this.router.navigate(['list-student']);
            }
          );
      }
    );
  }

}

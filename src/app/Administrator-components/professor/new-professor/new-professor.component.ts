import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {School} from '../../../models/School.module';
import {Subscription} from 'rxjs';
import {AccountService} from '../../../services/account.service';
import {SchoolService} from '../../../services/school.service';
import {Account} from '../../../models/Account.module';
import {Professor} from '../../../models/Professor.module';
import {ProfessorService} from '../../../services/professor.service';
import {AdministratorService} from '../../../services/administrator.service';

@Component({
  selector: 'app-new-professor',
  templateUrl: './new-professor.component.html',
  styleUrls: ['./new-professor.component.scss']
})
export class NewProfessorComponent implements OnInit {

  professorForm: FormGroup;
  professor: Professor;
  constructor(private professorService: ProfessorService, private  accountService: AccountService,
              private administratorService: AdministratorService) { }

  init() {
    this.professorForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl('')
    });
  }
  ngOnInit(): void {
    this.init();
  }

  OnSubmit() {
    const administrator = this.administratorService.getAdministratorByUsernameAndPassword(localStorage.getItem('username'),
      localStorage.getItem('password'));
    if ( administrator !== undefined) {
      this.professor = new Professor();
      this.professor.firstName = this.professorForm.get('firstName').value;
      this.professor.lastName = this.professorForm.get('lastName').value;
      this.professor.phone = this.professorForm.get('phone').value;
      this.professor.email = this.professorForm.get('email').value;
      const account = new Account();
      account.password = this.professor.firstName + '123';
      account.userName = this.professor.email;
      account.school = administrator.account.school;
      this.accountService.createNewAccount(account).subscribe(
        (data) => {
          alert(JSON.stringify(data));
          this.professor.account = data;
          this.professorService.createNewProfessor(this.professor);
        }
      );
      alert('Bien enregistre ');
    } else {
      alert('Erreur Connexion');
    }
  }

}

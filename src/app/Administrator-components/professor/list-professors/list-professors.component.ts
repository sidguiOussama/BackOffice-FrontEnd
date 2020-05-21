import { Component, OnInit } from '@angular/core';

import {Subscription} from 'rxjs';

import {Professor} from '../../../models/Professor.module';
import {ProfessorService} from '../../../services/professor.service';
import {Student} from '../../../models/Student.module';
import {AdministratorService} from '../../../services/administrator.service';

@Component({
  selector: 'app-list-professors',
  templateUrl: './list-professors.component.html',
  styleUrls: ['./list-professors.component.scss']
})
export class ListProfessorsComponent implements OnInit {

  professors: Professor[] = [];
  professorSubscription: Subscription;
  constructor(private professorService: ProfessorService, private administratorService: AdministratorService) { }

  init() {
    this.administratorService.getAdministratorByUsernameAndPasswordFromDB(localStorage.getItem('username'),
      localStorage.getItem('password')).subscribe(
      (data) => {
        this.professorService.getProfessorsBySchoolId(data.account.school);
        this.professorSubscription = this.professorService.professorSubject.subscribe(
          (students: Student[]) => {
            this.professors = students;
          }
        );
      }
    );
  }
  ngOnInit(): void {
    this.init();
  }

}

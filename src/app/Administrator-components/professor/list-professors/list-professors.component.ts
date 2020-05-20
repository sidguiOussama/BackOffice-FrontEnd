import { Component, OnInit } from '@angular/core';

import {Subscription} from 'rxjs';

import {Professor} from '../../../models/Professor.module';
import {ProfessorService} from '../../../services/professor.service';

@Component({
  selector: 'app-list-professors',
  templateUrl: './list-professors.component.html',
  styleUrls: ['./list-professors.component.scss']
})
export class ListProfessorsComponent implements OnInit {

  professors: Professor[] = [];
  professorSubscription: Subscription;
  constructor(private professorService: ProfessorService) { }

  init(){
    this.professorService.getProfessors();
    this.professorSubscription = this.professorService.professorSubject.subscribe(
      (professors: Professor[]) => {
        this.professors = professors;
      }
    );
  }
  ngOnInit(): void {
    this.init();
  }

}

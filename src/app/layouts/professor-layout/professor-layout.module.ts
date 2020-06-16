import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';
import {ProfessorLayoutRoutes} from './professor-layout.routing';

import {ListClassRoomComponent} from '../../components-professor/classRoom/list-class-room/list-class-room.component';



@NgModule({
  declarations: [
    ListClassRoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProfessorLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
  ]
})
export class ProfessorLayoutModule { }

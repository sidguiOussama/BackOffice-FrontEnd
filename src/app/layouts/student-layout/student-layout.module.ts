import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLayoutComponent } from './student-layout/student-layout.component';
import {RouterModule} from '@angular/router';
import {AdministratorLayoutRoutes} from '../administrator-layout/administrator-layout.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';
import {StudentLayoutRoutes} from './student-layout.routing';

import {ListClassRoomStudentComponent} from '../../components-student/class-room/list-class-room-student/list-class-room-student.component';
import {ListDocumentComponent} from '../../components-student/document/list-document/list-document.component';
import {DetailsDocumentComponent} from '../../components-student/document/details-document/details-document.component';
import {ListHomeworkComponent} from '../../components-student/homework/list-homework/list-homework.component';
import {DetailsHomeworkComponent} from '../../components-student/homework/details-homework/details-homework.component';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListClassRoomStudentComponent,
    ListDocumentComponent,
    DetailsDocumentComponent,
    ListHomeworkComponent,
    DetailsHomeworkComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(StudentLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
  ]
})
export class StudentLayoutModule { }

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
import {TestStudentComponent} from '../../components-student/test-student/test-student.component';



@NgModule({
  declarations: [
    TestStudentComponent
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

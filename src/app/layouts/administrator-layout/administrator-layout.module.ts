import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import {AdministratorLayoutRoutes} from './administrator-layout.routing';
import {TestComponent} from '../../pages/test/test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ClipboardModule} from 'ngx-clipboard';
import {NewStudentComponent} from '../../Administrator-components/student/new-student/new-student.component';
import {ListStudentsComponent} from '../../Administrator-components/student/list-students/list-students.component';
import {NewProfessorComponent} from '../../Administrator-components/professor/new-professor/new-professor.component';
import {ListProfessorsComponent} from '../../Administrator-components/professor/list-professors/list-professors.component';
import {NewAdministratorComponent} from '../../Administrator-components/administrator/new-administrator/new-administrator.component';
import {LoginComponent} from '../../Administrator-components/authentification/login/login.component';
import {NewLevelComponent} from '../../Administrator-components/Level/new-level/new-level.component';




@NgModule({
  declarations: [
    TestComponent,
    NewStudentComponent,
    ListStudentsComponent,
    NewProfessorComponent,
    ListProfessorsComponent,
    NewAdministratorComponent,
    LoginComponent,
    NewLevelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdministratorLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
  ]
})
export class AdministratorLayoutModule { }

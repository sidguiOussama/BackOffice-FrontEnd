import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {AbsenceService} from './services/absence.service';
import {AccountService} from './services/account.service';
import {AdministratorService} from './services/administrator.service';
import {ClassRoomService} from './services/class-room.service';
import {ProfessorService} from './services/professor.service';
import {SchoolService} from './services/school.service';
import {SessionService} from './services/session.service';
import {StudentService} from './services/student.service';
import {LevelService} from './services/level.service';
import {AdministratorLayoutComponent} from './layouts/administrator-layout/administrator-layout/administrator-layout.component';
import {StudentLayoutComponent} from './layouts/student-layout/student-layout/student-layout.component';
import {ProfessorLayoutComponent} from './layouts/professor-layout/professor-layout/professor-layout.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AdministratorLayoutComponent,
    StudentLayoutComponent,
    ProfessorLayoutComponent

  ],
  providers: [
    AbsenceService,
    AccountService,
    AdministratorService,
    ClassRoomService,
    ProfessorService,
    SchoolService,
    SessionService,
    StudentService,
    LevelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

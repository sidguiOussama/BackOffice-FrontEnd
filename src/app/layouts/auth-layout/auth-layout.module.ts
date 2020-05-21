import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RegisterComponent } from '../../pages/register/register.component';
import {NewAdministratorComponent} from '../../Administrator-components/administrator/new-administrator/new-administrator.component';
import {AdministratorLayoutRoutes} from '../administrator-layout/administrator-layout.routing';
import {HttpClientModule} from '@angular/common/http';
import {ClipboardModule} from 'ngx-clipboard';
import {LoginComponent} from '../../Administrator-components/authentification/login/login.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    // NgbModule
  ],
  declarations: [
    RegisterComponent,
    NewAdministratorComponent,
    LoginComponent
  ]
})
export class AuthLayoutModule { }

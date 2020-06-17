import { Routes } from '@angular/router';


import { RegisterComponent } from '../../pages/register/register.component';
import {LoginComponent} from '../../Administrator-components/authentification/login/login.component';
import {NewAdministratorComponent} from '../../Administrator-components/administrator/new-administrator/new-administrator.component';

export const AuthLayoutRoutes: Routes = [
   // { path: 'login',          component: LoginComponent },
    { path: 'register',       component: RegisterComponent },
    { path: 'new-administrator', component: NewAdministratorComponent},
    { path: 'login-admin', component: LoginComponent},
];

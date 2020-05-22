import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {AdministratorLayoutComponent} from './layouts/administrator-layout/administrator-layout/administrator-layout.component';
import {StudentLayoutComponent} from './layouts/student-layout/student-layout/student-layout.component';
import {ProfessorLayoutComponent} from './layouts/professor-layout/professor-layout/professor-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  }, {
    path: '',
    component: AdministratorLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/administrator-layout/administrator-layout.module#AdministratorLayoutModule'
      }
    ]
  }, {
    path: '',
    component: StudentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/student-layout/student-layout.module#StudentLayoutModule'
      }
    ]
  }, {
    path: '',
    component: ProfessorLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/professor-layout/professor-layout.module#ProfessorLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

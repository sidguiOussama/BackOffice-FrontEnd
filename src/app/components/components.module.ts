import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarAdministratorComponent } from './sidebar-administrator/sidebar-administrator.component';
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { SidebarProfessorComponent } from './sidebar-professor/sidebar-professor.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarAdministratorComponent,
    SidebarStudentComponent,
    SidebarProfessorComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarAdministratorComponent,
    SidebarStudentComponent,
    SidebarProfessorComponent
  ]
})
export class ComponentsModule { }

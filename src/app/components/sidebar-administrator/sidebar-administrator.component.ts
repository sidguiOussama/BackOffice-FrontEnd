import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/list-student', title: 'Etudiants',  icon:'fa-graduation-cap text-blue', class: '' },
  { path: '/list-professor', title: 'Enseignants',  icon:'fa-users text-yellow', class: '' },
  { path: '/new-level', title: 'Niveau scolaire',  icon:' fa-sort text-info', class: '' },
  { path: '/list-classRoom', title: 'Cours',  icon:' fa-laptop text-blue', class: '' }

];
@Component({
  selector: 'app-sidebar-administrator',
  templateUrl: './sidebar-administrator.component.html',
  styleUrls: ['./sidebar-administrator.component.css']
})
export class SidebarAdministratorComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

}

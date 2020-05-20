import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/new-student', title: 'Ajouter etudiant',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/list-student', title: 'liste des etudiants',  icon:'ni-planet text-blue', class: '' },
  { path: '/new-professor', title: 'ajouter enseignant',  icon:'ni-pin-3 text-orange', class: '' },
  { path: '/list-professor', title: 'Liste des enseignants',  icon:'ni-single-02 text-yellow', class: '' },
  { path: '/new-administrator', title: 'ajouter Administartor',  icon:'ni-bullet-list-67 text-red', class: '' },
  { path: '/new-level', title: 'ajouter niveau',  icon:'ni-key-25 text-info', class: '' },
  { path: '/login-admin', title: 'Login',  icon:'ni-circle-08 text-pink', class: '' },
  { path: '/test', title: 'Test',  icon:'ni-circle-08 text-pink', class: '' }

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

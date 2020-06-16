import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/list-classRoomProfessor', title: 'Mes cours',  icon:'fa-graduation-cap text-blue', class: '' },
];

@Component({
  selector: 'app-sidebar-professor',
  templateUrl: './sidebar-professor.component.html',
  styleUrls: ['./sidebar-professor.component.css']
})
export class SidebarProfessorComponent implements OnInit {
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

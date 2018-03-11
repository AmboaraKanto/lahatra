import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lahatra = { name: 'Lahatra' };
  logo = { name: '../assets/img/logo.png' };
  menuItems: MenuItem[];

  constructor() {
    this.sidenavActions = new EventEmitter<any>();
    this.sidenavParams = [];

    this.menuItems = [
          { name: "Inscription", route: "/inscription", icon:"fa fa-user" },
          { name: "Connexion", route: "/connexion", icon:"fa fa-sign-in" }
      ];
  }

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];
}

export interface MenuItem {

  name: string;
  route: string;
  icon: string;
}

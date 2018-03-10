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
          { name: "Inscription", route: "/inscription" },
          { name: "Connexion", route: "/connexion" }
      ];
  }

  sidenavActions: EventEmitter<any>;
  sidenavParams: any[];
}

export interface MenuItem {

  name: string;
  route: string;
}

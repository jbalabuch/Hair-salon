import { Component } from '@angular/core';

@Component({
  selector: 'menu',
  template: `
    <header class="header">
      <a href="/"
        ><img class="logo" src="assets/images/logo.png" alt="logo"
      /></a>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn"
        ><span class="nav-icon"></span
      ></label>
      <ul class="menu">
        <li
          routerLink="/uslugi"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a href="/uslugi">Usługi</a>
        </li>
        <li
          routerLink="/cennik"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a href="/cennik">Cennik</a>
        </li>
        <li
          routerLink="/o-nas"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a href="/o-nas">O nas</a>
        </li>
        <li
          routerLink="/maps"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <a href="/maps">Salon</a>
        </li>
      </ul>
    </header>
  `,
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {}

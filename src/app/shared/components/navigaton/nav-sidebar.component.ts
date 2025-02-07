import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="flex flex-col space-y-6 text-lg items-center">
      <a routerLink="/" class="font-semibold">Главная</a>
      <a routerLink="afisha" class="font-semibold">Афиша</a>
      <a routerLink="offers" class="font-semibold">Акции</a>
      <a routerLink="menu" class="font-semibold">Меню</a>
      <a routerLink="about" class="font-semibold">О нас</a>
      <a routerLink="rules" class="font-semibold">Правила бара</a>
    </nav>

  `
})
export class NavSidebarComponent {

}

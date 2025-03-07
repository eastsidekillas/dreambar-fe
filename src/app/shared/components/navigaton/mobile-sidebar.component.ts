import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mobile-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="md:hidden fixed top-0 left-0 w-full h-16 flex items-center justify-between p-4 z-50 bg-sidebar-surface-primary shadow-md">
      <button (click)="toggleMenu()" class="text-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <a href="tel:+79000486700" class="text-white font-semibold text-lg bg-primary px-4 py-2 rounded-full hover:bg-hover-primary transition-colors">
        +7(900)-048-67-00
      </a>
    </div>


    <div [ngClass]="{'translate-x-0': isMenuOpen, '-translate-x-full': !isMenuOpen}" class="fixed top-0 left-0 w-full h-screen bg-sidebar-surface-primary p-6 text-typo-main transform transition-transform duration-300 ease-in-out md:hidden z-40 shadow-lg flex flex-col">
      <button (click)="toggleMenu()" class="absolute top-4 right-4 text-white p-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <nav class="flex flex-col space-y-6 text-lg items-center mt-20">
        <a routerLink="/" class="font-semibold">Главная</a>
        <a routerLink="afisha" class="font-semibold">Афиша</a>
        <a routerLink="offers" class="font-semibold">Акции</a>
        <a routerLink="menu" class="font-semibold">Меню</a>
        <a routerLink="about" class="font-semibold">О нас</a>
        <a routerLink="rules" class="font-semibold">Правила бара</a>
      </nav>
    </div>

  `
})
export class MobileSidebarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isModalOpen = false;
  private routerSub: Subscription | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isMenuOpen = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  // Метод для открытия модального окна
  openReservModal() {
    this.isModalOpen = true;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

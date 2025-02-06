import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavSidebarComponent} from './nav-sidebar.component';
import {MobileSidebarComponent} from './mobile-sidebar.component';
import {RouterLink} from '@angular/router';
import {ReservModalComponent} from '../reserv-modal/reserv-modal.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NavSidebarComponent, MobileSidebarComponent, RouterLink, ReservModalComponent],
  template: `
    <aside class="w-80 h-screen bg-sidebar-surface-primary text-typo-main p-6 flex flex-col fixed top-0 left-0 z-30 md:block hidden justify-between">
      <div>
        <a routerLink="/">
          <img src="logo.png" class="mb-16 w-5/2 text-center">
        </a>
        <app-nav-sidebar></app-nav-sidebar>
      </div>

      <div>
        <div class="mt-24">
          <a (click)="openReservModal()" class="bg-typo-main text-typo-dark font-medium py-3 px-4 rounded-full hover:bg-hover-primary transition-colors text-center block">
            Забронировать стол
          </a>
        </div>

        <div class="mt-6 text-center">
          <p class="font-semibold">Заказать банкет</p>
          <a href="tel:+79995622871" class="bg-primary text-white py-3 px-4 rounded-full hover:bg-hover-primary transition-colors">+79995622871</a>
          <p class="font-semibold mt-4"> Нижняя Тура / Декабристов, 2к</p>
        </div>
      </div>
    </aside>

    <app-mobile-sidebar></app-mobile-sidebar>

    <app-reserv-modal *ngIf="isModalOpen" (closeModal)="closeModal()"></app-reserv-modal>
  `
})
export class SidebarComponent {
  isModalOpen = false;  // Переменная состояния для модального окна

  // Метод для открытия модального окна
  openReservModal() {
    this.isModalOpen = true;
  }

  // Метод для закрытия модального окна
  closeModal() {
    this.isModalOpen = false;
  }
}

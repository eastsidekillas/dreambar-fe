import { Component } from '@angular/core';
import {CommonModule, NgComponentOutlet} from '@angular/common';
import {HomeComponent} from '../../../main/pages/home/home.component';
import {SidebarComponent} from '../../components/navigaton/sidebar.component';
import {SliderComponent} from '../../components/slider/slider.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [CommonModule, SidebarComponent, RouterOutlet],
  template:
    `
      <div class="flex">
        <app-sidebar></app-sidebar>

        <main class="flex-1 p-4 md:p-10 ml-0 md:ml-80 overflow-y-auto h-screen">
          <router-outlet></router-outlet>
        </main>
      </div>


    `
})
export class DefaultLayoutComponent {

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultLayoutComponent} from './theme/default-layout/default-layout.component';
import {CardListComponent} from './components/card-list/card-list.component';
import {GallaryComponent} from './components/gallary/gallary.component';
import {SidebarComponent} from './components/navigaton/sidebar.component';
import {NavSidebarComponent} from './components/navigaton/nav-sidebar.component';
import {MobileSidebarComponent} from './components/navigaton/mobile-sidebar.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    DefaultLayoutComponent,
    CardListComponent,
    GallaryComponent,
    SidebarComponent,
    NavSidebarComponent,
    MobileSidebarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
})
export class SharedModule { }

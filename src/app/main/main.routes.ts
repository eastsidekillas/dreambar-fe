import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultLayoutComponent} from '../shared/theme/default-layout/default-layout.component';
import {AfishaComponent} from './pages/afisha/afisha.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'afisha', component: AfishaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

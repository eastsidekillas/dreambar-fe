import type {Routes} from '@angular/router';
import {AfishaComponent} from './pages/afisha/afisha.component';
import {HomeComponent} from './pages/home/home.component';
import {OffersComponent} from './pages/offers/offers.component';
import {AboutComponent} from './pages/about/about.component';
import {AfishaDetailComponent} from './pages/afisha-detail/afisha-detail.component';
import {OffersDetailComponent} from './pages/offers-detail/offers-detail.component';
import {RulesComponent} from './pages/rules/rules.component';

export const MainRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'afisha', component: AfishaComponent },
  { path: 'afisha/:slug', component: AfishaDetailComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'offers/:slug', component: OffersDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rules', component: RulesComponent }
];


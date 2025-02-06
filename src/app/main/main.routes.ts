import type {Routes} from '@angular/router';
import {AfishaComponent} from './pages/afisha/afisha.component';
import {HomeComponent} from './pages/home/home.component';
import {OffersComponent} from './pages/offers/offers.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactsComponent} from './pages/contacts/contacts.component';
import {AfishaDetailComponent} from './pages/afisha-detail/afisha-detail.component';

export const MainRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'afisha', component: AfishaComponent },
  { path: 'afisha/:slug', component: AfishaDetailComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent }
];


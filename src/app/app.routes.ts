import type { Route } from '@angular/router';
import {MainRoutes} from './main/main.routes';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./shared/theme/default-layout/default-layout.component').then(m => m.DefaultLayoutComponent),
    children: MainRoutes
  },
];

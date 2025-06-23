import { Routes } from '@angular/router';
import { LoginComponent }      from './pages/auth/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { DashboardComponent }  from './pages/dashboard/dashboard.component';
import { OnHandComponent }     from './pages/on-hand/on-hand.component';
import { ProductosComponent }  from './pages/productos/productos.component';

import { authGuard }           from './guards/auth.guard';

export const routes: Routes = [
  /* ---------- login abierto ---------- */
  { path: 'login', component: LoginComponent },

  /* ---------- layout protegido ---------- */
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', redirectTo: '', pathMatch: 'full' },

      { path: 'on-hand',   component: OnHandComponent },
      { path: 'productos', component: ProductosComponent },

      { path: '**', redirectTo: '' }
    ]
  },

  /* comodín global */
  { path: '**', redirectTo: 'login' }
];

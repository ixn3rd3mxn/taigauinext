import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'ir-db', loadComponent: () => import('./pages/ir-db/ir-db.component').then(m => m.IrDbComponent) },
    { path: 'ir-r', loadComponent: () => import('./pages/ir-r/ir-r.component').then(m => m.IrRComponent) },
    { path: 'ir-md', loadComponent: () => import('./pages/ir-md/ir-md.component').then(m => m.IrMdComponent) },
    { path: 'rd-m', loadComponent: () => import('./pages/rd-m/rd-m.component').then(m => m.RdMComponent) },
    { path: 'rd-r', loadComponent: () => import('./pages/rd-r/rd-r.component').then(m => m.RdRComponent) },
    { path: 'rd-md', loadComponent: () => import('./pages/rd-md/rd-md.component').then(m => m.RdMdComponent) },
];
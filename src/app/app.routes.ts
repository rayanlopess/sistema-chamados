import { Routes } from '@angular/router';
import { Home } from './home/home'; // ← Importe a classe Home
import { Dashboard } from './dashboard/dashboard'; // ← Importe a classe Home

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home }, // ← Use Home (não HomeComponent)
  { path: 'dashboard', component: Dashboard }
];
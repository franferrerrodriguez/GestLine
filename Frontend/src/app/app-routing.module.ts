import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }      from './components/auth/login/login.component';
import { LinesDashboardComponent }      from './components/lines-dashboard/lines-dashboard.component';
import { ConsumptionComponent }      from './components/consumption/consumption.component';
import { InvoicesComponent }      from './components/invoices/invoices.component';
import { ServicesComponent }      from './components/services/services.component';
import { SettingsComponent }      from './components/settings/settings.component';
import { AuthGuard } from './components/auth/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lines-dashboard', component: LinesDashboardComponent, canActivate:[AuthGuard] },
  { path: 'consumption', component: ConsumptionComponent, canActivate:[AuthGuard] },
  { path: 'invoices', component: InvoicesComponent, canActivate:[AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate:[AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate:[AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'lines-dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

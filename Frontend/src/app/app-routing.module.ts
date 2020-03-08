import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }      from './components/auth/login/login.component';
import { LinesDashboardComponent }      from './components/lines-dashboard/lines-dashboard.component';
import { ConsumptionComponent }      from './components/consumption/consumption.component';
import { InvoicesComponent }      from './components/invoices/invoices.component';
import { ServicesComponent }      from './components/services/services.component';
import { SettingsComponent }      from './components/settings/settings.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'lines-dashboard', component: LinesDashboardComponent },
  { path: 'consumption', component: ConsumptionComponent },
  { path: 'invoices', component: InvoicesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lines-dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

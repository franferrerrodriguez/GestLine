import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LinesDashboardComponent } from './components/lines-dashboard/lines-dashboard.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { ChartComponent } from './components/shared/chart/chart.component';
import { ConsumptionComponent } from './components/consumption/consumption.component';
import { ServicesComponent } from './components/services/services.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LimitSliderComponent } from './components/shared/limit-slider/limit-slider.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LinesDashboardComponent,
    InvoicesComponent,
    NavbarComponent,
    FooterComponent,
    SpinnerComponent,
    ChartComponent,
    ConsumptionComponent,
    ServicesComponent,
    SettingsComponent,
    LimitSliderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ChartsModule, 
    WavesModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    WeatherPageComponent,
    EmployeePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

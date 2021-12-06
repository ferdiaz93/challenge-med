import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { EmployeePageComponent } from './components/employee-page/employee-page.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';

const routes: Routes = [
  {path: 'contact' , component: ContactPageComponent},
  {path: 'weather' , component: WeatherPageComponent},
  {path: 'employee' , component: EmployeePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

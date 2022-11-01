import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageComponent } from './error/error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';
import { MapsComponent } from './maps/maps.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ErrorPageComponent,
    HomeComponent,
    MapsComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ErrorPageComponent,
    HomeComponent,
    MapsComponent,
    TasksComponent
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './pages/error/error-page/error-page.component';
import { LoginComponent } from './auth/components/login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { MapsComponent } from './maps/components/map/maps.component';
import { HomeComponent } from './pages/components/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  {path:'',
    component:AppComponent
  },
  {path:'inicio',
    component:HomeComponent
  },
  {
    path:'mapas',
    component:MapsComponent},
  {
    path:'tareas',
    component:TasksComponent},
  {
    path:'**',

    component:ErrorPageComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

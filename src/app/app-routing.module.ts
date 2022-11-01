import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './pages/error/error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { MapsComponent } from './pages/maps/maps.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  {path:'',
    component:LoginComponent
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

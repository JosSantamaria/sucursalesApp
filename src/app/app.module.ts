import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './auth/components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { MapComponent } from './maps/components/map/map.component';
import { TaskComponent } from './tasks/components/task/task.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MapComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

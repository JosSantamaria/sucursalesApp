import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    MenuComponent,
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenuComponent,
    SideNavComponent
  ]
})
export class SharedModule { }

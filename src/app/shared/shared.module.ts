import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';



@NgModule({
  declarations: [
    MenuComponent,
    SideNavComponent
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

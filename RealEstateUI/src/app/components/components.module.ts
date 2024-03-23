import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    NavbarComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
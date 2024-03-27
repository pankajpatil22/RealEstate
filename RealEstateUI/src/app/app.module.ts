import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './pages/home/home.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

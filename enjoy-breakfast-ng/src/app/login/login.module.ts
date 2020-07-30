import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login.component";

import {BrowserModule} from '@angular/platform-browser';
import { HeaderComponent } from '../layout/header/header.component';


// import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
    
  ],
  providers: [],
  // bootstrap: [AppComponent]
  
})
export class LoginModule { 
  
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Algo1Component } from './algo1/algo1.component';
import { Algo2Component } from './algo2/algo2.component';
import { Algo3Component } from './algo3/algo3.component';
import { Algo4Component } from './algo4/algo4.component';
import { Algo5Component } from './algo5/algo5.component';
import { Algo6Component } from './algo6/algo6.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Algo1Component,
    Algo2Component,
    Algo3Component,
    Algo4Component,
    Algo5Component,
    Algo6Component,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

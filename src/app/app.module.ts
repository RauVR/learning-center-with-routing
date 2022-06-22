import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {StudentsService} from "./students/services/students.service";
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule  //Agregamos esto
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { AppRoutingModule } from './/app-routing.module';
import { EqualheightDirective } from './test01/equalheight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test01Component,
    Test02Component,
    EqualheightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

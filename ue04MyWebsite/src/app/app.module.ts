import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreesComponent } from './trees.component';
import { CarsComponent } from './cars.component';
import { ClockComponent } from './clock.component';

@NgModule({
  declarations: [
    AppComponent, TreesComponent, CarsComponent, ClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

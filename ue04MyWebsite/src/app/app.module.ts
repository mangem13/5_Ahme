import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreesComponent } from './trees.component';
import { CarsComponent } from './cars.component';
import { ClockComponent } from './clock.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartsModule } from 'ng4-charts/ng4-charts';

@NgModule({
  declarations: [
    AppComponent, TreesComponent, CarsComponent, ClockComponent, NavbarComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

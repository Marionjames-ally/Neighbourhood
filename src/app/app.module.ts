import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoodComponent } from './hood/hood.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthorityComponent } from './authority/authority.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { NotificationComponent } from './notification/notification.component';
import { OutComponent } from './out/out.component';




@NgModule({
  declarations: [
    AppComponent,
    HoodComponent,
    NavbarComponent,
    AuthorityComponent,
    BusinessComponent,
    HealthComponent,
    NotificationComponent,
    OutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    RouterModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

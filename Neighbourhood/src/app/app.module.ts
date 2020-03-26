import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';
// import { MatSliderModule } from '@angular/material/slider';
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
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
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
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, EventService, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
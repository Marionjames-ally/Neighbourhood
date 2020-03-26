import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HoodComponent } from './hood/hood.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { HoodComponent } from './components/hood/hood.component';
// import { AuthorityComponent } from './components/authority/authority.component';
// import { BusinessComponent } from './components/business/business.component';
// import { HealthComponent } from './components/health/health.component';
// import { NotificationsComponent } from './components/notifications/notifications.component';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


// const appRoutes: Routes = [
//   { path: 'hood', component: HoodComponent },
//   { path: 'authority', component: AuthorityComponent },
//   { path: 'business', component: BusinessComponent },
//   { path: 'health', component: HealthComponent },
//   { path: 'notifications', component: NotificationsComponent },
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    HoodComponent,
    NavbarComponent,
    // HoodComponent,
    // AuthorityComponent,
    // BusinessComponent,
    // HealthComponent,
    // NotificationsComponent,
    // PageNotFoundComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

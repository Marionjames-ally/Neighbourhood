import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { HoodComponent } from './hood/hood.component';
import { AuthorityComponent } from './authority/authority.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { NotificationComponent } from './notification/notification.component';
import { OutComponent } from './out/out.component';

const routes: Routes=[
{
  path: '',
  redirectTo: '/events',
  pathMatch: 'full'
},
{
  path: 'events',
  component: EventsComponent
},
{
  path: 'special',
  canActivate: [AuthGuard],
  component: SpecialEventsComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
  { path: 'hood', component: HoodComponent },
  { path: 'authority', component: AuthorityComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'health', component: HealthComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'log-out', component: OutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoodComponent } from './hood/hood.component';
import { AuthorityComponent } from './authority/authority.component';
import { BusinessComponent } from './business/business.component';
import { HealthComponent } from './health/health.component';
import { NotificationComponent } from './notification/notification.component';
import { OutComponent } from './out/out.component';

const routes: Routes = [
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

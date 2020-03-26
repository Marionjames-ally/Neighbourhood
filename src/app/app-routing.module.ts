import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HoodComponent } from './hood/hood.component';


const routes: Routes = [
  (path: 'hood', component: HoodComponent )
  (path: 'authority', component: AuthorityComponent )
  (path: 'business', component: BusinessComponent )
  (path: 'health', component: HealthComponent )
  (path: 'notifications', component: NotificationsComponent )
  (path: 'log-out', component: Log-OutComponent )
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

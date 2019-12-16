import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { CustomerDetailsComponent } from './routes/customer-details/customer-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'home'} },
  { path: 'customer-details/:id', component: CustomerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

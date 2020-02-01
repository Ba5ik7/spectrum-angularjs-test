import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { CustomerDetailsComponent } from './routes/customer-details/customer-details.component';
import { CustomerCreateComponent } from './routes/customer-create/customer-create.component';
import { ModalComponent } from './routes/modal/modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'home'} },
  { path: 'customer-details/:id', component: CustomerDetailsComponent },
  { path: 'customer-create', component: CustomerCreateComponent },
  { path: 'modal', component: ModalComponent, outlet: 'modal', data: {animation: 'Modal'}  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

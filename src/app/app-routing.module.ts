import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './routes/home/home.component';
import { CustomerDetailsComponent } from './routes/customer-details/customer-details.component';
import { CustomerCreateComponent } from './routes/customer-create/customer-create.component';
import { ModalComponent } from './routes/modal/modal.component';
import { CustomerContactComponent } from './routes/customer-create/customer-contact/customer-contact.component';
import { CustomerAddressComponent } from './routes/customer-create/customer-address/customer-address.component';
import { CustomerAccountTypeComponent } from './routes/customer-create/customer-account-type/customer-account-type.component';
import { CustomerAgreementComponent } from './routes/customer-create/customer-agreement/customer-agreement.component';
import { CustomerCredentialsComponent } from './routes/customer-create/customer-credentials/customer-credentials.component';
import { CustomerEmploymentComponent } from './routes/customer-create/customer-employment/customer-employment.component';
import { CustomerPersonalComponent } from './routes/customer-create/customer-personal/customer-personal.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' }},
  { path: 'customer-details/:id', component: CustomerDetailsComponent, data: { animation: 'CustomerCreate' }},
  { 
    path: 'customer-create', 
    component: CustomerCreateComponent, 
    data: { animation: 'CustomerCreate' },
    children: [
      { path: 'address', component: CustomerAddressComponent },
      { path: 'account-type', component: CustomerAccountTypeComponent },
      { path: 'agreement', component: CustomerAgreementComponent },
      { path: 'contact', component: CustomerContactComponent },
      { path: 'credentials', component: CustomerCredentialsComponent },
      { path: 'employment', component: CustomerEmploymentComponent },
      { path: 'personal', component: CustomerPersonalComponent },
      { path: '', redirectTo: '/customer-create/contact', pathMatch: 'full' },
    ]},
  { path: 'modal', component: ModalComponent, outlet: 'modal', data: { animation: 'Modal' }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

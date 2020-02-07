import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';
import { CustomerDetailsComponent } from './routes/customer-details/customer-details.component';
import { InputFieldComponent } from './common/input-field/input-field.component';
import { SearchResultListComponent } from './common/search-result-list/search-result-list.component';
import { ToastComponent } from './common/toast/toast.component';
import { ModalComponent } from './routes/modal/modal.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { CustomerCreateComponent } from './routes/customer-create/customer-create.component';
import { CustomerContactComponent } from './routes/customer-create/customer-contact/customer-contact.component';
import { CustomerAddressComponent } from './routes/customer-create/customer-address/customer-address.component';
import { CustomerPersonalComponent } from './routes/customer-create/customer-personal/customer-personal.component';
import { CustomerEmploymentComponent } from './routes/customer-create/customer-employment/customer-employment.component';
import { CustomerAgreementComponent } from './routes/customer-create/customer-agreement/customer-agreement.component';
import { CustomerCredentialsComponent } from './routes/customer-create/customer-credentials/customer-credentials.component';
import { CustomerAccountTypeComponent } from './routes/customer-create/customer-account-type/customer-account-type.component';
import { SelectBoxComponent } from './common/select-box/select-box.component';
 
export let NgxMaskOptions: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    InputFieldComponent,
    SearchResultListComponent,
    CustomerCreateComponent,
    ToastComponent,
    ModalComponent,
    CustomerDetailsComponent,
    CustomerContactComponent,
    CustomerAddressComponent,
    CustomerPersonalComponent,
    CustomerEmploymentComponent,
    CustomerAgreementComponent,
    CustomerCredentialsComponent,
    CustomerAccountTypeComponent,
    SelectBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(NgxMaskOptions),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

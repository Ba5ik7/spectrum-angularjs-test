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
import { CustomerCreateComponent } from './routes/customer-create/customer-create.component';
import { ToastComponent } from './common/toast/toast.component';
import { ModalComponent } from './routes/modal/modal.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
 
export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerDetailsComponent,
    InputFieldComponent,
    SearchResultListComponent,
    CustomerCreateComponent,
    ToastComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(options),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerDetailsComponent,
    InputFieldComponent,
    SearchResultListComponent,
    CustomerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

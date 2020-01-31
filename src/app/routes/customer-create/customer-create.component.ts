import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent {

  createCustomerForm = this.fb.group({
    customerId: ['', Validators.required],
    customerFirstName: ['', Validators.required],
    customerLastName: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

}
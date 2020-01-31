import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/interfaces/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  createCustomerForm = this.fb.group({
    customerId: [this.customerService.createGuid(), Validators.required],
    customerFirstName: ['', Validators.required],
    customerLastName: ['', Validators.required],
  });
 
  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) { }
  
  ngOnInit() {
    this.createCustomerForm.get('customerId').disable();
  }

  createCustomer() {
    const form = this.createCustomerForm;
    const customer: Customer = {
      id: form.get('customerId').value,
      name: `${form.get('customerFirstName').value} ${form.get('customerLastName').value}`,
      points: 0,
      transactions: []
    }

    this.customerService.create(customer);
    this.router.navigate(['']);
    
  }
}
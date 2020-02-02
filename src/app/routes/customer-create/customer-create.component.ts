import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/interfaces/customer';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';

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
    customerEmail: ['', Validators.required],
    customerPhone: ['', Validators.required],

  });
 
  constructor(
    private customerService: CustomerService,
    private toastService: ToastService,
    private fb: FormBuilder,
    private router: Router) { }
  
  ngOnInit() {
    this.createCustomerForm.get('customerId').disable();
  }

  createCustomer() {
    const form = this.createCustomerForm;
    const customer: Customer = {
      id: form.get('customerId').value,
      name: `${form.get('customerFirstName').value} ${form.get('customerLastName').value}`,
      email: form.get('customerEmail').value,
      phone: form.get('customerPhone').value,
      points: 0,
      transactions: []
    }

    this.customerService.create(customer);

    this.toastService.push('Customer Created!');
    this.router.navigate(['']);
  }
}
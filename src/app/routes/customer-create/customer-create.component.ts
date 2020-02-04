import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent {

  createCustomerForm = this.fb.group({
    customerFirstName: ['', [Validators.required, ValidationsService.nameValidator]],
    customerLastName: ['', [Validators.required, ValidationsService.nameValidator]],
    customerEmail: ['', [Validators.required, ValidationsService.emailValidator]],
    customerPhone: ['', [Validators.required, ValidationsService.phoneValidator]]
  });
 
  constructor(
    private customerService: CustomerService,
    private toastService: ToastService,
    private fb: FormBuilder,
    private router: Router) { }

  createCustomer() {
    ValidationsService.validFromValidator(this.createCustomerForm);
    if(this.createCustomerForm.status === 'INVALID') return;

    this.customerService.create(this.createCustomerForm);
    this.toastService.push('Customer Created!');
    this.router.navigate(['']);
  }
}
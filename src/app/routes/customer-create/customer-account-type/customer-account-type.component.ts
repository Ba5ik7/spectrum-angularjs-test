import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-customer-account-type',
  templateUrl: './customer-account-type.component.html',
  styleUrls: ['./customer-account-type.component.scss']
})
export class CustomerAccountTypeComponent implements OnInit {

  customerForm: FormGroup;
 
  constructor(
    private customerService: CustomerService,
    private toastService: ToastService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    // Check to see if there is an form to prepop user info
    this.customerService.customerForm !== null ? this.customerForm = this.customerService.customerForm : this.createNewCustomerFormGroup();
  }

  createNewCustomerFormGroup() {
    this.customerForm = this.fb.group({
      customerFirstName: ['', [Validators.required, ValidationsService.nameValidator]],
      customerMiddleInitial: [],
      customerLastName: ['', [Validators.required, ValidationsService.nameValidator]],
      customerEmail: ['', [Validators.required, ValidationsService.emailValidator]],
      customerPhone: ['', [Validators.required, ValidationsService.phoneValidator]]
    });
  }

  createCustomer() {
    ValidationsService.validFromValidator(this.customerForm);
    if(this.customerForm.status === 'INVALID') return;

    this.customerService.create(this.customerForm);
    this.toastService.push('Customer Created!');
    this.router.navigate(['']);
  }
}

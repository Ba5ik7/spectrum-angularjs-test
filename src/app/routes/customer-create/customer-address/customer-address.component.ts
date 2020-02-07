import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent implements OnInit {

  customerForm: FormGroup;
  states = [
    {text: 'Arizona', id: 'AZ', test: 'test'},
    {text: 'California', id: 'CA'},
    {text: 'Colorado', id: 'CO'},
    {text: 'New York', id: 'NY'},
    {text: 'Pennsylvania', id: 'PA'},
  ];
 
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
      customerAddress: ['', [Validators.required, ValidationsService.nameValidator]],
      customerSecondaryStreet: [],
      customerCity: ['', [Validators.required, ValidationsService.nameValidator]],
      customerState: ['', [Validators.required]],
      customerZip: ['', [Validators.required]]
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

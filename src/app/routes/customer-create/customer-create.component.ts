import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  createCustomerForm = this.fb.group({
    customerId: ['Wes', Validators.required],
    customerFirstName: ['', Validators.required],
    customerLastName: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.createCustomerForm.get('customerId').disable();
    console.log('this.createCustomerForm', this.createCustomerForm.get('customerId'));
    
  }

}
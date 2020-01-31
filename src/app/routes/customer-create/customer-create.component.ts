import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

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

  constructor(private fb: FormBuilder, private customerService: CustomerService) { }
  
  ngOnInit() {
    this.createCustomerForm.get('customerId').disable();
  }

}
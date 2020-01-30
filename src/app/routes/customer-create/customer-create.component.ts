import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  createCustomerForm = new FormGroup({
    customerId: new FormControl(''),
    customerFirstName: new FormControl(''),
    customerLastName: new FormControl(''),
  });
  
  constructor() { }

  ngOnInit() {
  }

}

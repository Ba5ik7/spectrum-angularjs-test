import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of } from 'rxjs';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Array<Customer> = new Array();
  customers$ = of(this.customers);

  constructor(private http: HttpClient) { 
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe( data => this.customers.push(...data));
  }

  create(customer: Customer) {

  }

  update(customerID: number) {

  }

  delete(customerID: number) {

  }
}

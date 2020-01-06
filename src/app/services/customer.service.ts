import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, BehaviorSubject } from 'rxjs';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer;

  customers: Array<Customer> = new Array();
  customers$ = of(this.customers);

  currentCustomersId: number;
  currentCustomer$: BehaviorSubject<Customer> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { 
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.http.get<Customer[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe( data => {
      this.customers.push(...data);
      this.setCurrentCustomer();
    });
  }

  setCurrentCustomer() {
    this.currentCustomer$.next(this.customers.find(val => val.id === this.currentCustomersId));
  }

  getCustomerByID(): Customer {
    return
  }

  create(customer: Customer) {

  }

  update(customerID: number) {

  }

  delete(customerID: number) {

  }

}

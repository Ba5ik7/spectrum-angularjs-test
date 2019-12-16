import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map, flatMap, filter, reduce, tap } from 'rxjs/operators';

import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Subject<Customer> = new Subject();

  constructor(private http: HttpClient) { 
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe( data => this.customers.next(<Customer> data));
  }

  create(customer: Customer) {

  }

  update(customerID: number) {

  }

  delete(customerID: number) {

  }
}

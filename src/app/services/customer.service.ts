import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, flatMap, filter, reduce, tap } from 'rxjs/operators';

import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Array<Customer> = new Array;

  constructor(private http: HttpClient) { }

  create() {
    this.customers.push({
      id: 2,
      name: 'Wesley',
      transactions: [],
      points: 100
    });
  }

  read() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      map(response => <Customer> response)
    )
    .subscribe( data => {
      console.log(data);
    });
    // return this.customers;
  }

  update(customerID: number) {

  }

  delete(customerID: number) {

  }


}

import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers: Array<Customer> = new Array;

  constructor() { }

  create() {
    this.customers.push({
      id: 2,
      name: 'Wesley',
      transactions: [],
      points: 100
    });
  }

  read() {
    return this.customers;
  }

  update(customerID: number) {

  }

  delete(customerID: number) {

  }


}

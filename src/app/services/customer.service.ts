import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, BehaviorSubject } from 'rxjs';
import { Customer } from '../interfaces/customer';

import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer: Customer;

  customers: Array<Customer> = new Array();
  customers$ = of(this.customers);

  currentCustomersId: string;
  currentCustomer$: BehaviorSubject<Customer> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { 
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.http.get<Customer[]>('/api/customer/customers')
    .subscribe((data: Customer[]) => this.customers.push(...data));
  }

  setCurrentCustomer() {
    this.currentCustomer$.next(this.customers.find(val => val.id == this.currentCustomersId));
  }

  getCustomerByID(): Customer {
    return 
  }

  create(form: FormGroup) {
    const customer: Customer = {
      name: `${form.get('customerFirstName').value} ${form.get('customerLastName').value}`,
      email: form.get('customerEmail').value,
      phone: form.get('customerPhone').value,
      points: 0,
      transactions: []
    }
    
    this.http.post<Customer>('/api/customer/create', customer)
    .subscribe((data: Customer) => this.customers.push(data));
  }

  update(customerID: number) {

  }

  delete(customerID: string) {
    let index = -1;
    this.customers.filter((value, i) => {
      if(value.id == customerID) index = i;
      return value.id == customerID;
    });

    if (index !== -1) this.customers.splice(index, 1);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/interfaces/customer';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  customer: Customer;
  customers$: Observable<any>;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    this.customers$ = from(this.customerService.customers);
    console.log(this.customers$, 'Customer');
  }

}

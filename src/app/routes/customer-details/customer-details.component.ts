import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  currentCustomer: Customer;

  constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.customerService.currentCustomersId = this.route.snapshot.params.id;
    this.customerService.setCurrentCustomer();
    this.customerService.currentCustomer$.subscribe(val => {
      if (val === undefined) this.router.navigate(['']);
      this.currentCustomer = val;
    });
  }


  deleteCustomerComfirm(event: Event) {

  }
}

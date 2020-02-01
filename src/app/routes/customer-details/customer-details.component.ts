import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/interfaces/customer';

import { ModalService } from 'src/app/services/modal.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  currentCustomer: Customer;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
    private ms: ModalService,
    private toastService: ToastService) { }

  ngOnInit() {
    this.customerService.currentCustomersId = this.route.snapshot.params.id;
    this.customerService.setCurrentCustomer();
    this.customerService.currentCustomer$.subscribe(val => {
      if (val === undefined) this.router.navigate(['']);
      this.currentCustomer = val;
    });
  }


  deleteCustomerComfirm(event: Event) {
    const modal = {
      title: 'Woah!',
      bodyContent: '<p class="flow-text" >You are ablout to delete this customer. Are you should you want to?</p>',
      cb: () => this.deleteCustomer(),
      buttons: [
        {
          id: 'model_primary_btn',
          classes: 'btn mobile-primary red',
          text: 'Confrim',
          action: 'cb'
        },
        {
          id: 'modal_sec_btn',
          classes: 'btn-flat',
          text: 'Cancel',
          action: 'close'
        }
      ]
    };
    this.ms.modal$.next(modal);
    this.router.navigate([{ outlets: { modal: 'modal' }}]);
  }

  deleteCustomer() {
    this.customerService.delete(this.currentCustomer.id);
    this.toastService.push('Customer Deleted!');
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest, from } from 'rxjs';
import { startWith, map, } from 'rxjs/operators';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  filter$: Observable<string>;
  customers$: Observable<any>;
  filteredCustomers$: Observable<Customer>;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customers$ = from(this.customerService.customers);
    this.filter$ = this.searchControl.valueChanges.pipe(startWith(''));
    this.filteredCustomers$ = combineLatest(this.customers$, this.filter$).pipe(
      map(([customers, filterString]) => {
        return customers.filter(customers => customers.name.indexOf(filterString) !== -1)
      })
    );
  }
}

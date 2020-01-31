import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filter$: Observable<string>;
  filteredCustomers$: Observable<Customer[]>;

  showResults: boolean = true;

  searchForm = this.fb.group({
    searchControl: ['', Validators.required],
  });
  
  constructor(private customerService: CustomerService, private fb: FormBuilder) { }

  ngOnInit() {
    this.filter$ = this.searchForm.get('searchControl').valueChanges.pipe(startWith(''));
    this.filteredCustomers$ = combineLatest(this.customerService.customers$, this.filter$).pipe(
      map(([customers, filterString]) => {
        if(filterString === '') return [];

        const pattern = filterString.split('').map(v => `(?=.*${v})`).join('');
        const regex = new RegExp(`${pattern}`, 'gi');

        // return customers.filter(customers => regex.exec(customers.name));
        return customers.filter(customers => customers.name.match(regex));
      })
    );

    this.filteredCustomers$.subscribe(data => this.showResults = data.length > 0 ? true : false);
  }
}

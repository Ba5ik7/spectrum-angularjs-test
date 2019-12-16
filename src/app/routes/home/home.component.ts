import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchControl: FormControl = new FormControl('');

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    // this.customerService.create();
    let test = this.customerService.read();
    this.searchControl.valueChanges.subscribe( val => console.log(`Hello ${val}`));
  }

}

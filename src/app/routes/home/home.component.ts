import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.create();
    let test = this.customerService.read();

    console.log(test);
    
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
  @Input() results: Array<Customer[]> = new Array();

  constructor() { }

  ngOnInit() {

  }

}

import { Component, Input } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent {
  @Input() results: Observable<Customer[]>;

  constructor() { }

}

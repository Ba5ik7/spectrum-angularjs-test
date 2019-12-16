import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss']
})
export class SearchResultListComponent implements OnInit {
  @Input() results: Array<any> = new Array();

  constructor() { }

  ngOnInit() {

  }

}

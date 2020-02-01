import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modal: any;

  constructor(private ms: ModalService, private router: Router) { }

  ngOnInit() {
    this.ms.modal$.subscribe(modal => this.modal = modal);
  }

  actions(action) {
    switch(action) {
      case 'close':
        this.close();
        break;
      case 'cb':
        this.modal.cb();
        break;
    }
  }

  close(route = null) {
    this.router.navigate([{ outlets: { modal: null }}]);
  }
}

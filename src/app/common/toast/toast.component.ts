import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  toasts: Observable<string[]> = this.toastService.toasts$

  constructor(private toastService: ToastService) { }
}

import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toasts: Array<string> = new Array();
  toasts$ = of(this.toasts);

  constructor() { }

  push(str: string) {
    setTimeout(() => this.toasts.pop(), 4000);
    this.toasts.push(str);
  }
}

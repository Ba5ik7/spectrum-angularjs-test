import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
 
  modal$: BehaviorSubject<object> = new BehaviorSubject(null);

  constructor() { }
}

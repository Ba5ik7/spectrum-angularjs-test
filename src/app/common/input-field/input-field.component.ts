import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input() control: FormControl = new FormControl('');

  @Input() helperText: string;
  @Input() helperTextClasses: string;

  @Input() labelClasses: string;
  @Input() labelText: string = 'Label Text Default';

  @Input() inputId: string;
  @Input() inputType: string = 'text';
  @Input() inputClasses: string = 'validate';
  
  @Input() wrapperClasses: string = '';

  inputModel: any = '';
  isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  private onBlur(event) {
    // console.log(this.control);
    this.isActive = this.control.value !== '';
  }

  private onFocus(event) {
    this.isActive = true;
  }
}

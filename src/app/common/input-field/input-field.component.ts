import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    // {
    //   provide: NG_VALUE_ACCESSOR,
    //   useExisting: forwardRef(() => InputFieldComponent),
    //   multi: true
    // },
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: InputFieldComponent,
    //   multi: true
    // }  
  ]
})
export class InputFieldComponent implements ControlValueAccessor {

  @Input() helperText: string;
  @Input() helperTextClasses: string;

  @Input() labelClasses: string;
  @Input() labelText: string = 'Label Text Default';

  @Input() inputId: string;
  @Input() inputType: string = 'text';
  @Input() inputClasses: string = 'validate';

  @Input() wrapperClasses: string = '';

  @Input() maskPattern: string = '';

  isActive: boolean ;

  error: string;
  escalateMsg: boolean = true;
  value: string;
  onChange: () => void;
  onTouched: () => void;
  disabled: boolean;
  valid: boolean = true;

  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;
  }

  ngOnInit() {
    this.controlDir.valueChanges.subscribe((val) => this.valueChange(val));    
  }

  valueChange(val): void {
    this.valid = this.controlDir.control.status !== 'INVALID';
    if(this.valid === false) {
      const errorsMessages: any = ValidationsService.getValidatorErrorMessage(this.controlDir.errors);
      this.error = errorsMessages[0];
    }
  }

  writeValue(value: string): void {
    console.log(this.value);
    this.value = value ? value : '';
    console.log(this.value);
    
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur(event) {
    this.isActive = event.target.value !== '';
    this.escalateMsg = this.valid === false;
    this.onTouched();
  }

  onFocus() {
    this.isActive = true;
    this.escalateMsg = false;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

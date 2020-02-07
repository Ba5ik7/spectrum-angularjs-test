import { Component, OnInit, Self, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() checkboxes: any[]
  value: string;
  disabled: boolean;
  onChange: () => void;
  onTouched: () => void;

  constructor(@Self() public controlDir: NgControl) {
    controlDir.valueAccessor = this;
    // console.log(controlDir);
    // controlDir.control.valueChanges.subscribe((val) => this.valueChange(val));
    // this.checkboxes.forEach((item, idx) => this.jobDetails.get('techs').setControl(idx, item));
  }

  ngOnInit() {
    this.controlDir.control.valueChanges.subscribe((val) => this.valueChange(val));
    this.controlDir.control.setValue(this.checkboxes);
  }

  valueChange(val) {
    // console.log(val);
  }

  writeValue(value: any): void {
    this.value = value ? value : [];
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onClick(event) {
    const bool = event.target.value == 'true';
    // Find Index
    // const foundIndex = this.checkboxes.findIndex((value: any) => value.id == event.target.id);
    // this.checkboxes[foundIndex].value = !bool;
    // For each
    // this.checkboxes.forEach((element: any, index) => {
    //   if(element.id === event.target.id) {
    //     this.checkboxes[index].value = !bool;
    //   }
    // });
    // Map
    Object.assign(this.checkboxes, this.checkboxes.map(el=> {
      if (el.id === event.target.id) {
        el.value = !bool 
      }
      return el;
    }));
    this.controlDir.control.setValue(this.checkboxes);
  }

}

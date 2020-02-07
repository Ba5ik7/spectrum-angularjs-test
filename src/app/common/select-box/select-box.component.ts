import { Component, Renderer2, OnInit, ElementRef, ViewChild, Self, Input } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements ControlValueAccessor, OnInit {
  
  @ViewChild('selectInput') el:ElementRef;

  disabled: boolean;
  open: boolean = false;
  valid: boolean = true;
  value: any;
  defaultOption: any = { text: 'Choose A Value', id: 'default' };
  
  @Input() labelText: string = 'Materialize Select';
  @Input() options:[];
  @Input() inputId: string;
  @Input() wrapperClasses: string = '';

  
  onChange: () => void;
  onTouched: () => void;
  listenerFn: () => void;

  constructor(@Self() public controlDir: NgControl, public renderer: Renderer2) {
    controlDir.valueAccessor = this;
  }

  ngOnInit() {

  }

  writeValue(value: any): void {
    this.value = value ? value : this.defaultOption;
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

  onBlur(event): void {
    this.onTouched();
  }

  optionSelected(event): void {
    this.value = Object.assign({}, event.target.dataset);
    this.closeDropdown();
  }

  openDropdown(event): void {
    if (this.open !== true) {
      const selectedOption = event.target.nextElementSibling.querySelector(`li`);
      this.listenerFn = this.renderer.listen('document', 'mousedown', (event) => this.documentClicked(event));
      this.open = true;
      // Race con Fuck me!!!! @TODO open support task
      setTimeout(() => selectedOption.focus(), 100);
    }
  }

  documentClicked(event): void {
    const hasDropdownEl = event.target.closest('.dropdown-content');
    if (hasDropdownEl == null) {
      this.closeDropdown();
    }
  }

  closeDropdown(): void {
    this.el.nativeElement.focus();
    this.open = false;
    this.listenerFn();
  }

  arrowUp(event): void {
    event.target.previousElementSibling.focus();
  }

  arrowDown(event): void {
    if(event.target.nextElementSibling != null) {
      event.target.nextElementSibling.focus();
    }
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountTypeComponent } from './customer-account-type.component';

describe('CustomerAccountTypeComponent', () => {
  let component: CustomerAccountTypeComponent;
  let fixture: ComponentFixture<CustomerAccountTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAccountTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

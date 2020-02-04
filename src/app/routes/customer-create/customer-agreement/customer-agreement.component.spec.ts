import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAgreementComponent } from './customer-agreement.component';

describe('CustomerAgreementComponent', () => {
  let component: CustomerAgreementComponent;
  let fixture: ComponentFixture<CustomerAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

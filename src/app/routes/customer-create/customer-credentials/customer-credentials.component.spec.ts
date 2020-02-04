import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCredentialsComponent } from './customer-credentials.component';

describe('CustomerCredentialsComponent', () => {
  let component: CustomerCredentialsComponent;
  let fixture: ComponentFixture<CustomerCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

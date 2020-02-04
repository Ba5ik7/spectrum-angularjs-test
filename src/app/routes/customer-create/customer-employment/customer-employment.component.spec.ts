import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEmploymentComponent } from './customer-employment.component';

describe('CustomerEmploymentComponent', () => {
  let component: CustomerEmploymentComponent;
  let fixture: ComponentFixture<CustomerEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

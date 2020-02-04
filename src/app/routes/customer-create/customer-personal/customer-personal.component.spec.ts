import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPersonalComponent } from './customer-personal.component';

describe('CustomerPersonalComponent', () => {
  let component: CustomerPersonalComponent;
  let fixture: ComponentFixture<CustomerPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

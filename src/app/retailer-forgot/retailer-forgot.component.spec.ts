import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerForgotComponent } from './retailer-forgot.component';

describe('RetailerForgotComponent', () => {
  let component: RetailerForgotComponent;
  let fixture: ComponentFixture<RetailerForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerForgotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

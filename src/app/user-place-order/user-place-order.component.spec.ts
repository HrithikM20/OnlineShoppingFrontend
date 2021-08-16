import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlaceOrderComponent } from './user-place-order.component';

describe('UserPlaceOrderComponent', () => {
  let component: UserPlaceOrderComponent;
  let fixture: ComponentFixture<UserPlaceOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPlaceOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlaceOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerHeaderComponent } from './retailer-header.component';

describe('RetailerHeaderComponent', () => {
  let component: RetailerHeaderComponent;
  let fixture: ComponentFixture<RetailerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

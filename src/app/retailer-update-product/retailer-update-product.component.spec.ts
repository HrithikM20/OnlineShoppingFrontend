import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerUpdateProductComponent } from './retailer-update-product.component';

describe('RetailerUpdateProductComponent', () => {
  let component: RetailerUpdateProductComponent;
  let fixture: ComponentFixture<RetailerUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerUpdateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

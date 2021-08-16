import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRetailersComponent } from './admin-retailers.component';

describe('AdminRetailersComponent', () => {
  let component: AdminRetailersComponent;
  let fixture: ComponentFixture<AdminRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRetailersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

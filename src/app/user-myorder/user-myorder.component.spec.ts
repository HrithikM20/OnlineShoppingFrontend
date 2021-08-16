import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyorderComponent } from './user-myorder.component';

describe('UserMyorderComponent', () => {
  let component: UserMyorderComponent;
  let fixture: ComponentFixture<UserMyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMyorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

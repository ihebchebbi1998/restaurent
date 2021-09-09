import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChefsComponent } from './admin-chefs.component';

describe('AdminChefsComponent', () => {
  let component: AdminChefsComponent;
  let fixture: ComponentFixture<AdminChefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

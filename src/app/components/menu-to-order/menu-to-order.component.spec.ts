import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuToOrderComponent } from './menu-to-order.component';

describe('MenuToOrderComponent', () => {
  let component: MenuToOrderComponent;
  let fixture: ComponentFixture<MenuToOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuToOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuToOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

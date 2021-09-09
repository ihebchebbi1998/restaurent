import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChefComponent } from './display-chef.component';

describe('DisplayChefComponent', () => {
  let component: DisplayChefComponent;
  let fixture: ComponentFixture<DisplayChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

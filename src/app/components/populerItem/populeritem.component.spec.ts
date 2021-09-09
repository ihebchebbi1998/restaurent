import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuleritemComponent } from './populeritem.component';

describe('PopuleritemComponent', () => {
  let component: PopuleritemComponent;
  let fixture: ComponentFixture<PopuleritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopuleritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopuleritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

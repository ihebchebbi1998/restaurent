import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartComponent } from './about-part.component';

describe('AboutPartComponent', () => {
  let component: AboutPartComponent;
  let fixture: ComponentFixture<AboutPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

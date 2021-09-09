import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupChefComponent } from './signup-chef.component';

describe('SignupChefComponent', () => {
  let component: SignupChefComponent;
  let fixture: ComponentFixture<SignupChefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupChefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupChefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

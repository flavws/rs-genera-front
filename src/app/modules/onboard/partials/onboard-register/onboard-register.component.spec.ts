import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardRegisterComponent } from './onboard-register.component';

describe('OnboardRegisterComponent', () => {
  let component: OnboardRegisterComponent;
  let fixture: ComponentFixture<OnboardRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

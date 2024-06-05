import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardTwoComponent } from './onboard-two.component';

describe('OnboardTwoComponent', () => {
  let component: OnboardTwoComponent;
  let fixture: ComponentFixture<OnboardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

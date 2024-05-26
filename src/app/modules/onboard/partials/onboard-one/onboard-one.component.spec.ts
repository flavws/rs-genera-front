import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardOneComponent } from './onboard-one.component';

describe('OnboardOneComponent', () => {
  let component: OnboardOneComponent;
  let fixture: ComponentFixture<OnboardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

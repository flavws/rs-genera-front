import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingViewProfessionalComponent } from './scheduling-view-professional.component';

describe('SchedulingViewProfessionalComponent', () => {
  let component: SchedulingViewProfessionalComponent;
  let fixture: ComponentFixture<SchedulingViewProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingViewProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingViewProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

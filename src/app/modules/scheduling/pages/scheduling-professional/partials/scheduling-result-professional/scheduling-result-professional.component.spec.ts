import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingResultProfessionalComponent } from './scheduling-result-professional.component';

describe('SchedulingResultProfessionalComponent', () => {
  let component: SchedulingResultProfessionalComponent;
  let fixture: ComponentFixture<SchedulingResultProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingResultProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingResultProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

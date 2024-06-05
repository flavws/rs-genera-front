import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingProfessionalComponent } from './scheduling-professional.component';

describe('SchedulingProfessionalComponent', () => {
  let component: SchedulingProfessionalComponent;
  let fixture: ComponentFixture<SchedulingProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingProfessionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

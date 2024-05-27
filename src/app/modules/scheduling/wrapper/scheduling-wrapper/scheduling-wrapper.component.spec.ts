import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingWrapperComponent } from './scheduling-wrapper.component';

describe('SchedulingWrapperComponent', () => {
  let component: SchedulingWrapperComponent;
  let fixture: ComponentFixture<SchedulingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingResultUserComponent } from './scheduling-result-user.component';

describe('SchedulingResultUserComponent', () => {
  let component: SchedulingResultUserComponent;
  let fixture: ComponentFixture<SchedulingResultUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingResultUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingResultUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

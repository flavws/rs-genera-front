import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingUserComponent } from './scheduling-user.component';

describe('SchedulingUserComponent', () => {
  let component: SchedulingUserComponent;
  let fixture: ComponentFixture<SchedulingUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

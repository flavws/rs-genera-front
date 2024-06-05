import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingViewUserComponent } from './scheduling-view-user.component';

describe('SchedulingViewUserComponent', () => {
  let component: SchedulingViewUserComponent;
  let fixture: ComponentFixture<SchedulingViewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingViewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

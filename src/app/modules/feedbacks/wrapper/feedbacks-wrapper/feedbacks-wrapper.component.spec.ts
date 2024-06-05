import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksWrapperComponent } from './feedbacks-wrapper.component';

describe('FeedbacksWrapperComponent', () => {
  let component: FeedbacksWrapperComponent;
  let fixture: ComponentFixture<FeedbacksWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacksWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbacksWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

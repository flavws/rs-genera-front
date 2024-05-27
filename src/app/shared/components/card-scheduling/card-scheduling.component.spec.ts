import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSchedulingComponent } from './card-scheduling.component';

describe('CardSchedulingComponent', () => {
  let component: CardSchedulingComponent;
  let fixture: ComponentFixture<CardSchedulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSchedulingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

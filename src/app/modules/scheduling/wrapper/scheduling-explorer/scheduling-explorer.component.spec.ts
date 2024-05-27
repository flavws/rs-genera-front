import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingExplorerComponent } from './scheduling-explorer.component';

describe('SchedulingExplorerComponent', () => {
  let component: SchedulingExplorerComponent;
  let fixture: ComponentFixture<SchedulingExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { StepManagerService } from './step-manager.service';

describe('StepManagerService', () => {
  let service: StepManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { SpiralService } from './spiral.service';

describe('SpiralService', () => {
  let service: SpiralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpiralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

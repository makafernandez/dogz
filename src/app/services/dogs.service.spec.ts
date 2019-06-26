import { TestBed } from '@angular/core/testing';

import { DogsServiceService } from './dogs.service';

describe('DogsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogsServiceService = TestBed.get(DogsServiceService);
    expect(service).toBeTruthy();
  });
});

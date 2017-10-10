import { TestBed, inject } from '@angular/core/testing';

import { DirectorsService } from './directors.service';

describe('DirectorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectorsService]
    });
  });

  it('should be created', inject([DirectorsService], (service: DirectorsService) => {
    expect(service).toBeTruthy();
  }));
});

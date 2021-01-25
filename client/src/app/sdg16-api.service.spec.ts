import { TestBed } from '@angular/core/testing';

import { Sdg16ApiService } from './sdg16-api.service';

describe('Sdg16ApiService', () => {
  let service: Sdg16ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sdg16ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

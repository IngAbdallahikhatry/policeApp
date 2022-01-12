import { TestBed } from '@angular/core/testing';

import { ComusareatService } from './comusareat.service';

describe('ComusareatService', () => {
  let service: ComusareatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComusareatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GetnoteService } from './notes.service';

describe('GetnoteService', () => {
  let service: GetnoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetnoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

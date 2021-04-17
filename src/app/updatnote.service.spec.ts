import { TestBed } from '@angular/core/testing';

import { UpdatnoteService } from './updatnote.service';

describe('UpdatnoteService', () => {
  let service: UpdatnoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatnoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

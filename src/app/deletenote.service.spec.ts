import { TestBed } from '@angular/core/testing';

import { DeletenoteService } from './deletenote.service';

describe('DeletenoteService', () => {
  let service: DeletenoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletenoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

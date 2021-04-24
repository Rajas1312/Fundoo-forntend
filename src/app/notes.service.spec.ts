import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { GetnoteService } from './notes.service';

describe('GetnoteService', () => {
  let service: GetnoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(GetnoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

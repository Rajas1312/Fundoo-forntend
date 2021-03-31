import { TestBed } from '@angular/core/testing';

import { ForgotpassordService } from './forgotpassord.service';

describe('ForgotpassordService', () => {
  let service: ForgotpassordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgotpassordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterService } from './user.service';

describe('RegisterService', () => {
  let service: RegisterService;
  //let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(RegisterService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NewSvcService } from './new-svc.service';

describe('NewSvcService', () => {
  let service: NewSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

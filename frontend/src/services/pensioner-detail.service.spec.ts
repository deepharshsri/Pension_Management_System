import { TestBed } from '@angular/core/testing';

import { PensionerDetailService } from './pensioner-detail.service';

describe('PensionerDetailService', () => {
  let service: PensionerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

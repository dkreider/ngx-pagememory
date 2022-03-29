import { TestBed } from '@angular/core/testing';

import { NgxPagememoryService } from './ngx-pagememory.service';

describe('NgxPagememoryService', () => {
  let service: NgxPagememoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPagememoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

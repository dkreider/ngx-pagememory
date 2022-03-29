import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NgxPagememoryService } from './ngx-pagememory.service';

describe('NgxPagememoryService', () => {
  let service: NgxPagememoryService;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router, useValue: routerSpy
        }
      ]
    });
    service = TestBed.inject(NgxPagememoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and return last route', () => {
    let fakeRoute = "/my/path/inside/angular/app";
    service.setLastRoute(fakeRoute);
    
    let result = service.getLastRoute();
    expect(result).toEqual(fakeRoute);
  })
});

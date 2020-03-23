import { TestBed } from '@angular/core/testing';

import { NgxMenuFloatService } from './ngx-menu-float.service';

describe('NgxMenuFloatService', () => {
  let service: NgxMenuFloatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMenuFloatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

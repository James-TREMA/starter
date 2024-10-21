import { TestBed } from '@angular/core/testing';

import { InfoClimatService } from './info-climat.service';

describe('InfoClimatService', () => {
  let service: InfoClimatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoClimatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

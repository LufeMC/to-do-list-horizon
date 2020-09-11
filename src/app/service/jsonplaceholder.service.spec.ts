import { TestBed } from '@angular/core/testing';

import { JSONPlaceholderService } from './jsonplaceholder.service';

describe('JSONPlaceholderService', () => {
  let service: JSONPlaceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONPlaceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

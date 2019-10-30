import { TestBed } from '@angular/core/testing';

import { BookooService } from './bookoo.service';

describe('BookooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookooService = TestBed.get(BookooService);
    expect(service).toBeTruthy();
  });
});

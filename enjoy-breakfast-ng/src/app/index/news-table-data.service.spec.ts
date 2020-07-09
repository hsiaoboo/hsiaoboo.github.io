import { TestBed } from '@angular/core/testing';

import { NewsTableDataService } from './news-table-data.service';

describe('NewsTableDataService', () => {
  let service: NewsTableDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsTableDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

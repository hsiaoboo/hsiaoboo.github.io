import { TestBed } from '@angular/core/testing';

import { AppElementService } from './app-element.service';

describe('AppElementService', () => {
  let service: AppElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

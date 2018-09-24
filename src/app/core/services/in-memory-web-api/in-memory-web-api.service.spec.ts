/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InMemoryWebApiService } from './in-memory-web-api.service';

describe('Service: InMemoryWebApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryWebApiService]
    });
  });

  it('should ...', inject([InMemoryWebApiService], (service: InMemoryWebApiService) => {
    expect(service).toBeTruthy();
  }));
});

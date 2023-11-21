/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManageApiService } from './manage-api.service';

describe('Service: ManageApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageApiService]
    });
  });

  it('should ...', inject([ManageApiService], (service: ManageApiService) => {
    expect(service).toBeTruthy();
  }));
});

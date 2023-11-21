/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShareStateService } from './share-state.service';

describe('Service: ShareState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareStateService]
    });
  });

  it('should ...', inject([ShareStateService], (service: ShareStateService) => {
    expect(service).toBeTruthy();
  }));
});

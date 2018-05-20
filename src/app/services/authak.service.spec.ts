import { TestBed, inject } from '@angular/core/testing';

import { AuthakService } from '.';

describe('AuthakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthakService]
    });
  });

  it('should be created', inject([AuthakService], (service: AuthakService) => {
    expect(service).toBeTruthy();
  }));
});

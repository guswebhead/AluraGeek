import { TestBed } from '@angular/core/testing';

import { AuthAdmService } from './auth-adm.service';

describe('AuthAdmService', () => {
  let service: AuthAdmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAdmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

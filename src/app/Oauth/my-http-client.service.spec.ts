import { TestBed } from '@angular/core/testing';

import { MyHttpClientService } from './my-http-client.service';

describe('MyHttpClientService', () => {
  let service: MyHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

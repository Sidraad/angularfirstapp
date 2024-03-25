import { TestBed } from '@angular/core/testing';

import { DialogueserviceService } from './dialogueservice.service';

describe('DialogueserviceService', () => {
  let service: DialogueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

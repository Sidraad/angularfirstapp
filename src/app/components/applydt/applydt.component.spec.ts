import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplydtComponent } from './applydt.component';

describe('ApplydtComponent', () => {
  let component: ApplydtComponent;
  let fixture: ComponentFixture<ApplydtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplydtComponent]
    });
    fixture = TestBed.createComponent(ApplydtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

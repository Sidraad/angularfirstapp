import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplynavComponent } from './applynav.component';

describe('ApplynavComponent', () => {
  let component: ApplynavComponent;
  let fixture: ComponentFixture<ApplynavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplynavComponent]
    });
    fixture = TestBed.createComponent(ApplynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

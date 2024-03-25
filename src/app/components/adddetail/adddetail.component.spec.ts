import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddetailComponent } from './adddetail.component';

describe('AdddetailComponent', () => {
  let component: AdddetailComponent;
  let fixture: ComponentFixture<AdddetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddetailComponent]
    });
    fixture = TestBed.createComponent(AdddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

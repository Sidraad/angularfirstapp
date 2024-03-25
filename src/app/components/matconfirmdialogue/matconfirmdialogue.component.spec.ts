import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatconfirmdialogueComponent } from './matconfirmdialogue.component';

describe('MatconfirmdialogueComponent', () => {
  let component: MatconfirmdialogueComponent;
  let fixture: ComponentFixture<MatconfirmdialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatconfirmdialogueComponent]
    });
    fixture = TestBed.createComponent(MatconfirmdialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

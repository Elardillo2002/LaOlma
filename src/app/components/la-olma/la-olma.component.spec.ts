import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaOlmaComponent } from './la-olma.component';

describe('LaOlmaComponent', () => {
  let component: LaOlmaComponent;
  let fixture: ComponentFixture<LaOlmaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaOlmaComponent]
    });
    fixture = TestBed.createComponent(LaOlmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

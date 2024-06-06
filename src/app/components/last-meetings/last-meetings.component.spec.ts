import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastMeetingsComponent } from './last-meetings.component';

describe('LastMeetingsComponent', () => {
  let component: LastMeetingsComponent;
  let fixture: ComponentFixture<LastMeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastMeetingsComponent]
    });
    fixture = TestBed.createComponent(LastMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

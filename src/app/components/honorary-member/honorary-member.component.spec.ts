import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonoraryMemberComponent } from './honorary-member.component';

describe('HonoraryMemberComponent', () => {
  let component: HonoraryMemberComponent;
  let fixture: ComponentFixture<HonoraryMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HonoraryMemberComponent]
    });
    fixture = TestBed.createComponent(HonoraryMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

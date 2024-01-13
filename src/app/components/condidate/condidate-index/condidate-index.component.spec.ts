import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondidateIndexComponent } from './condidate-index.component';

describe('CondidateIndexComponent', () => {
  let component: CondidateIndexComponent;
  let fixture: ComponentFixture<CondidateIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CondidateIndexComponent]
    });
    fixture = TestBed.createComponent(CondidateIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

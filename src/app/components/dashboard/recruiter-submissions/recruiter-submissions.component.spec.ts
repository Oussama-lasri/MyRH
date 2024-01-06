import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterSubmissionsComponent } from './recruiter-submissions.component';

describe('RecruiterSubmissionsComponent', () => {
  let component: RecruiterSubmissionsComponent;
  let fixture: ComponentFixture<RecruiterSubmissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterSubmissionsComponent]
    });
    fixture = TestBed.createComponent(RecruiterSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

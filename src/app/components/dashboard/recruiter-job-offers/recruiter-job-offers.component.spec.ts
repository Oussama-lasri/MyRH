import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterJobOffersComponent } from './recruiter-job-offers.component';

describe('RecruiterJobOffersComponent', () => {
  let component: RecruiterJobOffersComponent;
  let fixture: ComponentFixture<RecruiterJobOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterJobOffersComponent]
    });
    fixture = TestBed.createComponent(RecruiterJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

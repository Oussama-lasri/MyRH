import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterStatisticsComponent } from './recruiter-statistics.component';

describe('RecruiterStatisticsComponent', () => {
  let component: RecruiterStatisticsComponent;
  let fixture: ComponentFixture<RecruiterStatisticsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterStatisticsComponent]
    });
    fixture = TestBed.createComponent(RecruiterStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

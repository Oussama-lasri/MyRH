import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterCreateComponent } from './recruiter-create.component';

describe('RecruiterCreateComponent', () => {
  let component: RecruiterCreateComponent;
  let fixture: ComponentFixture<RecruiterCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterCreateComponent]
    });
    fixture = TestBed.createComponent(RecruiterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

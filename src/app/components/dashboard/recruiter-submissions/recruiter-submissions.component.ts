import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/models/Recruiter';
import { Resume } from 'src/app/models/Resume';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-recruiter-submissions',
  templateUrl: './recruiter-submissions.component.html',
  styleUrls: ['./recruiter-submissions.component.css']
})
export class RecruiterSubmissionsComponent implements OnInit {

  submissions: Resume[] = [];
  resume?: Resume;
  recruiter?: Recruiter | null;

  constructor(
    private router: Router,
    private resumeService: ResumeService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.recruiter = <Recruiter>this.authService.getAuthUser();
    console.log(this.recruiter);
    this.loadJobOffers();
  }

  loadJobOffers(): void {
    if (this.recruiter && this.recruiter.id) {
      this.resumeService.getAllResumeByJobOffer(this.recruiter.id).subscribe(
        (data) => {
          console.log(data);
          this.submissions = data;
        },
        (error) => {
          console.error('Error loading submissions:', error);
        }
      );
    }
  }
  updateResumeStatus(newStatus: string, id?: number):void {
    if (this.recruiter && this.recruiter.id && id) {
      this.resumeService.updateStatus(newStatus, id).subscribe(
        (data) => {
          console.log(data);
          this.resume = data;
          this.loadJobOffers();
        },
        (error) => {
          console.error('Error updating submissions:', error);
        }
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/AuthUser';
import { JobOffer } from 'src/app/models/JobOffer';
import { Resume } from 'src/app/models/Resume';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  jobOffers: JobOffer[] = [];
  resumes: any[] = [];
  auth?: AuthUser | null;

  errorMessages: string[] = [];

  constructor(
    private service: JobOfferService,
    private resumeService: ResumeService,
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.auth = <AuthUser>this.authService.getAuthUser();
    this.loadJobOffers();
  }

  loadJobOffers(): void {
    if (this.auth?.id) {

      this.resumeService.getAllResumeByUser(this.auth?.id).subscribe(
        (data) => {
          this.resumes = data;
        },
        (error) => {
          console.error('Error load:', error);
        }
      );
    }
  }
}
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/AuthUser';
import { JobOffer } from 'src/app/models/JobOffer';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-recruiter-job-offers',
  templateUrl: './recruiter-job-offers.component.html',
  styleUrls: ['./recruiter-job-offers.component.css']
})
export class RecruiterJobOffersComponent {
  jobOffers: JobOffer[] = [];
  authUser: AuthUser | null = null;

  constructor(
    private router: Router,
    private jobOfferService: JobOfferService,
    private authService: AuthenticationService,
  ) {}

  ngOnInit(): void {
    this.authUser = <AuthUser> this.authService.getAuthUser();
    this.loadJobOffersByRecruiterId();
    // this.loadJobOffers();
    
  }

  loadJobOffersByRecruiterId(): void {
    if (this.authUser?.id != null) {
      this.jobOfferService.getJobOffersByRecruiterId(this.authUser?.id).subscribe(
        (data) => {
          this.jobOffers = data;
          console.log(data);
        },
        (error) => {
          console.error('Error loading job offers by recruiter id:', error);
        }
      );
    }
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/model/JobOffer';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-recruiter-job-offers',
  templateUrl: './recruiter-job-offers.component.html',
  styleUrls: ['./recruiter-job-offers.component.css']
})
export class RecruiterJobOffersComponent {
  jobOffers: JobOffer[] = [];

  constructor(
    private router: Router,
    private jobOfferService: JobOfferService,
  ) {}

  ngOnInit(): void {
    this.loadJobOffers();
  }

  loadJobOffers(): void {
    this.jobOfferService.getAllJobOffers().subscribe(
      (data) => {
        this.jobOffers = data;
      },
      (error) => {
        console.error('Error loading job offers:', error);
      }
    );
  }
}

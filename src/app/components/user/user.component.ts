import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/models/JobOffer';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  jobOffers: JobOffer[] = [];

  errorMessages: string[] = [];

  constructor(
    private service: JobOfferService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loadJobOffers();
  }

  loadJobOffers(): void {
    this.service.getJobOffersByUserId(5).subscribe(
      (data) => {
        console.log(data);

        this.jobOffers = data;
      },
      (error) => {
        console.error('Error loading job offers:', error);
      }
    );
  }
}
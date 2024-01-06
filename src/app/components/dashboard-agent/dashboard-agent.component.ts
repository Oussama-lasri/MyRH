import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/model/JobOffer';
import { JobOfferService } from 'src/app/services/job-offer.service';


@Component({
  selector: 'app-dashboard-agent',
  templateUrl: './dashboard-agent.component.html',
  styleUrls: ['./dashboard-agent.component.css']
})
export class DashboardAgentComponent implements OnInit {
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
    this.service.getAllJobOffers().subscribe(
      (data) => {
        console.log(data);

        this.jobOffers = data;
      },
      (error) => {
        console.error('Error loading job offers:', error);
      }
    );
  }
  acceptedJobOffer(jobOfferId: any):void {
    this.service.updateJobOfferStatus(jobOfferId, "Accepted").subscribe(
      (data) => {
        console.log(data);
        this.loadJobOffers();
      },
      (error) => {
        console.error('Error loading job offers:', error);
      }
    );
  }
}

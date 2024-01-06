import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/model/JobOffer';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    
  }
}

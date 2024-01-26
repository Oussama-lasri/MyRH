import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/models/AuthUser';
import { StatisticsDTO } from 'src/app/models/StatisticsDTO';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-recruiter-statistics',
  templateUrl: './recruiter-statistics.component.html',
  styleUrls: ['./recruiter-statistics.component.css']
})
export class RecruiterStatisticsComponent implements OnInit {
  statistics?: StatisticsDTO;
  authUser: AuthUser | null = null;



  constructor(
    private statisticsService: StatisticsService,
    private jobOfferService: JobOfferService,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authUser = <AuthUser>this.authService.getAuthUser();
    this.getStatistics();
  }

  getStatistics(): void {
    if (this.authUser?.id != null) {
      this.statisticsService.getStatistics(this.authUser?.id)
        .subscribe(
          (data) => {
            this.statistics = data;
            console.log(data);
          },
          (error) => {
            console.error('Error loading statistics by recruiter id:', error);
          }
        );
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/model/Recruiter';
import { Resume } from 'src/app/model/Resume';
import { AuthDataService } from 'src/app/services/auth-data.service';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-recruiter-submissions',
  templateUrl: './recruiter-submissions.component.html',
  styleUrls: ['./recruiter-submissions.component.css']
})
export class RecruiterSubmissionsComponent implements OnInit{

  submissions: Resume[] = [];
  recruiter?: Recruiter|null;

  constructor(
    private router: Router,
    private resumeService: ResumeService,
    private authData: AuthDataService
  ) {}

  ngOnInit(): void {
    this.recruiter = this.authData.getRecruiterDataFromLocalStorage();
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


  
  loadAll(): void {
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
}

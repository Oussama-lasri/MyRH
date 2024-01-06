import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/model/JobOffer';
import { Resume } from 'src/app/model/Resume';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-job-offer-index',
  templateUrl: './job-offer-index.component.html',
  styleUrls: ['./job-offer-index.component.css'],
})
export class JobOfferIndexComponent implements OnInit {
  jobOffers: JobOffer[] = [];

  resumeForm: FormGroup;
  errorMessages: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: JobOfferService,
    private resumeService: ResumeService,

    private router: Router
  ) {
    this.resumeForm = this.formBuilder.group({
      resume: [null, [Validators.required]],
    });

  }

  ngOnInit(): void {
    this.loadJobOffers();
    this.loadAcceptedJobOffers();
  }

  resume: File | null = null; // Variable to store file
  onFileChange(event: any, id: number) {
    const resume: File = event.target.files[0];

    if (resume) {
      this.resume = resume;
      console.log(resume);
      
    }

    if (this.resume) {
      const formData = new FormData();
  
      formData.append('resume', this.resume, this.resume.name);
  
      this.resumeService.create(formData, id!).subscribe({
        next: (resume) => this.router.navigate(['/jobOffers']),
        error: (error) => {
          console.log(error);
        },
      });
    }
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
  loadAcceptedJobOffers(): void {
    this.service.getAllJobOffersByStatus('Accepted').subscribe(
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

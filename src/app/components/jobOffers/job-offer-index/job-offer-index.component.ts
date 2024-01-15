import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/AuthUser';
import { JobOffer } from 'src/app/models/JobOffer';
import { Resume } from 'src/app/models/Resume';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JobOfferService } from 'src/app/services/job-offer.service';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'app-job-offer-index',
  templateUrl: './job-offer-index.component.html',
  styleUrls: ['./job-offer-index.component.css'],
})
export class JobOfferIndexComponent implements OnInit {
  jobOffers: JobOffer[] = [];
  authUser!: AuthUser | null;

  resumeForm: FormGroup;
  errorMessages: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: JobOfferService,
    private resumeService: ResumeService,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.resumeForm = this.formBuilder.group({
      resume: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.loadAcceptedJobOffers();
  }

  resume: File | null = null;
  onFileChange(event: any, id: number) {
    const resume: File = event.target.files[0];

    if (resume) {
      this.resume = resume;
      console.log(resume);
    }

    if (this.resume) {
      this.authUser = <AuthUser>this.authService.getAuthUser();


      let userId = -1;
      if (this.authUser?.id) {
        userId = this.authUser?.id;
        alert("userId " + userId)
      }

      const formData = new FormData();
      formData.append('userId', `${userId}`);
      formData.append('resume', this.resume, this.resume.name);

      alert("authId " + userId)

      this.resumeService.create(formData, id!).subscribe({
        next: (resume) => this.router.navigate(['/jobOffer']),
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

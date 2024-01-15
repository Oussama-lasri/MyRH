import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { JobOffer } from 'src/app/models/JobOffer';
import { Recruiter } from 'src/app/models/Recruiter';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JobOfferService } from 'src/app/services/job-offer.service';

@Component({
  selector: 'app-job-offer-create',
  templateUrl: './job-offer-create.component.html',
  styleUrls: ['./job-offer-create.component.css'],
})
export class JobOfferCreateComponent implements OnInit {
  private recruiterId?: number | null;
  jobOfferForm: FormGroup;
  errorMessages: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private service: JobOfferService,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.jobOfferForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      city: ['', Validators.required],
      profile: ['', Validators.required],
      educationalLevel: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      status: ['Pending', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.recruiterId = this.authService.getAuthUser()?.id;
    console.log(this.recruiterId);
    console.log(1);

  }

  onFileChange(event: any) {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.jobOfferForm.patchValue({
        image: file,
      });
    }
  }

  onsubmit() {
    this.errorMessages = [];

    console.log(this.jobOfferForm);

    const jobOffer: JobOffer = {
      title: this.jobOfferForm.get('title')?.value,
      description: this.jobOfferForm.get('description')?.value,
      city: this.jobOfferForm.get('city')?.value,
      profile: this.jobOfferForm.get('profile')?.value,
      educationalLevel: this.jobOfferForm.get('educationalLevel')?.value,
      salary: this.jobOfferForm.get('salary')?.value,
      status: this.jobOfferForm.get('status')?.value,
    };

    this.service.createJobOffer(jobOffer, this.recruiterId!).subscribe({
      next: (jobOffer) => this.router.navigate(['/dashboard/recruiter-job-offers']),
      error: (error) => {
        console.log(error);
      },
    });
  }

  errorMessagesMapping: { [key: string]: string } = {};
}

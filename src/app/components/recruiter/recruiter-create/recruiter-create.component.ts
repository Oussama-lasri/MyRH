import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/models/Recruiter';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtService } from 'src/app/services/jwt.service';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-recruiter-create',
  templateUrl: './recruiter-create.component.html',
  styleUrls: ['./recruiter-create.component.css']
})
export class RecruiterCreateComponent implements OnInit {
  ngOnInit(): void {
  }

  recruiterForm: FormGroup
  errorMessages: string[] = []
  constructor(
    private formBuilder: FormBuilder,
    private service: RecruiterService,
    private router: Router,
    private authService: AuthenticationService,
    private jwtService: JwtService
  ) {
    this.recruiterForm = this.formBuilder.group({
      login: ['', Validators.required],
      address: ['', [Validators.required,]],
      phone: ['', [Validators.required,]],
      image: [null, [Validators.required,]],
      role: ['RECRUITER']
    });
  }

  onFileChange(event: any) {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      this.recruiterForm.patchValue({
        image: file
      });
    }
  }

  onsubmit() {
    this.errorMessages = []
    const recruiter: Recruiter = {
      id: this.authService.getAuthUser()?.id,
      login: this.recruiterForm.get("login")?.value,
      address: this.recruiterForm.get("address")?.value,
      phone: this.recruiterForm.get("phone")?.value,
      image: this.recruiterForm.get("image")?.value,
      role: this.recruiterForm.get("role")?.value,
      imageUrl: '',
    }

    this.service.create(recruiter).subscribe({
      next: (jwtToken) => {
        localStorage.setItem('token', JSON.stringify(jwtToken));
        this.jwtService.loadTokenFromStorage();

        console.log(this.authService.getAuthUser());
        this.router.navigate(["/validation"]);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  errorMessagesMapping: { [key: string]: string } = {};

}

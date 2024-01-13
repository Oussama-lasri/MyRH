import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/models/Recruiter';
import { SignUpRequest } from 'src/app/models/SignUpRequest';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RecruiterService } from 'src/app/services/recruiter.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  ngOnInit(): void {}

  signUpForm: FormGroup;
  errorMessages: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private service: AuthenticationService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      role: ['USER'],
    });
  }

  signUp() {
    this.errorMessages = [];

    const signUpFormValue = { ...this.signUpForm.value };
    // return;
    this.service.signUp(signUpFormValue).subscribe({
      next: (jwtToken) => {
        localStorage.setItem('token', JSON.stringify(jwtToken));
        console.log(jwtToken);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  errorMessagesMapping: { [key: string]: string } = {};
}

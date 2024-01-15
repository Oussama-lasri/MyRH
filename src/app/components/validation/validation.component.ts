import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/models/Recruiter';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RecruiterService } from 'src/app/services/recruiter.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements OnInit {
  ngOnInit(): void { }
  errorMessages: string[] = [];
  constructor(
    private service: RecruiterService,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  code: string = '';

  logCode() {
    console.log('Entered code:', this.code);
    const recruiter = <Recruiter>this.authService.getAuthUser();
    this.service.validate(recruiter.id!, this.code).subscribe({
      next: (res) => {
        if (res === true) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('invalid code');
        }
      },
      error: (error) => {
        console.log(error);
        alert('invalid code');
      },
    });
  }

  errorMessagesMapping: { [key: string]: string } = {};
}

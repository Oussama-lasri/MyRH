import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/model/Recruiter';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
  }

  recruiterForm: FormGroup
  errorMessages:string[] = []
  constructor(
    private formBuilder:FormBuilder,
    private service:RecruiterService,
    private router:Router,
  ) {
    this.recruiterForm = this.formBuilder.group({
      email: ['', [Validators.required,]],
      password: ['', Validators.required],
      login: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', [Validators.required,]],
      phone: ['', [Validators.required,]],
      image: [null, [Validators.required,]]
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
      email: this.recruiterForm.get("email")?.value,
      password: this.recruiterForm.get("password")?.value,
      login: this.recruiterForm.get("login")?.value,
      name: this.recruiterForm.get("name")?.value,
      address: this.recruiterForm.get("address")?.value,
      phone: this.recruiterForm.get("phone")?.value,
      image: this.recruiterForm.get("image")?.value,
      imageUrl: '',
    }
    this.service.create(recruiter).subscribe({
      next: (createdRecruiter) =>{
        localStorage.setItem('recruiter', JSON.stringify(createdRecruiter));
        console.log(createdRecruiter);
        
        this.router.navigate(["/"]);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  errorMessagesMapping: { [key: string]: string } = {};

}

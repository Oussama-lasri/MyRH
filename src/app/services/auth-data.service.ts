import { Injectable } from '@angular/core';
import { Recruiter } from '../models/Recruiter';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {
  public recruiter: Recruiter | null = null;
  constructor() { }

  getRecruiterDataFromLocalStorage(): Recruiter | null {
    const recruiterDataString = localStorage.getItem('recruiter');
    if (recruiterDataString) {
      this.recruiter = JSON.parse(recruiterDataString)
      console.log(JSON.parse(recruiterDataString));
      
      return JSON.parse(recruiterDataString);
    }
    return null;
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/model/Recruiter';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  logout() {
    localStorage.removeItem('recruiter');
    this.router.navigate(['/register']);
  }
  recruiter?: Recruiter | null;
  ngOnInit(): void {
    const recruiterData = this.getRecruiterDataFromLocalStorage();
    this.recruiter = recruiterData;
  }

  getRecruiterDataFromLocalStorage(): Recruiter | null {
    const recruiterDataString = localStorage.getItem('recruiter');
    if (recruiterDataString) {
      return JSON.parse(recruiterDataString);
    }
    return null;
  }
}

import { Component, OnInit } from '@angular/core';
import { Recruiter } from 'src/app/model/Recruiter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  recruiter?: Recruiter | null;
  ngOnInit(): void {
    const recruiterDataString = localStorage.getItem('recruiter');
    if (recruiterDataString) {
      this.recruiter =  JSON.parse(recruiterDataString);
    }

    console.log(this.recruiter?.role);
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthUser } from 'src/app/models/AuthUser';
import { Recruiter } from 'src/app/models/Recruiter';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  authUser?: AuthUser | null;
  constructor(private authService: AuthenticationService){}
  ngOnInit(): void {
    this.authUser = <AuthUser> this.authService.getAuthUser();
    
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyHttpClientService } from 'src/app/Oauth/my-http-client.service';
import { AuthUser } from 'src/app/models/AuthUser';
import { Recruiter } from 'src/app/models/Recruiter';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Token } from 'src/app/models/Token';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  authUser?: AuthUser | null;


  constructor(private authService: AuthenticationService ,
     private http : MyHttpClientService,
     private route: ActivatedRoute){}



  ngOnInit(): void {
    this.authUser = <AuthUser> this.authService.getAuthUser();
    this.getToken();
  }

  token : string = ""

  getToken() {
    this.route.queryParams.subscribe(params  => {
      
      if(params["code"] !== undefined){
        console.log(params["code"]);
            this.http.getToken(params["code"]).subscribe((result : any) => {
              console.log("token from home "+result);
              console.log(result);
              localStorage.setItem('token', result);
            })
      }
    })
  }

}

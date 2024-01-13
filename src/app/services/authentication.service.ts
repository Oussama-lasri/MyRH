import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtAuthenticationResponse } from '../models/JwtAuthenticationResponse';
import { Recruiter } from '../models/Recruiter';
import { SigninRequest } from '../models/SigninRequest';
import { SignUpRequest } from '../models/SignUpRequest';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private singUpUrl = 'http://localhost:8080/api/v1/auth/signup';
  private signInUrl = 'http://localhost:8080/api/v1/auth/signin';
  
  constructor(private http: HttpClient, private jwtService: JwtService) {}
  signUp(signUpRequest: SignUpRequest): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(`${this.singUpUrl}`, signUpRequest);
    
  }
  signIn(signInRequest: SigninRequest): Observable<JwtAuthenticationResponse> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.jwtService.getAuthToken()})}`,
      'Content-Type': 'application/json'
    });
    console.log(`Bearer ${this.jwtService.getAuthToken()})}`);
    
    return this.http.post<JwtAuthenticationResponse>(`${this.signInUrl}`, signInRequest, {headers});
  }
}

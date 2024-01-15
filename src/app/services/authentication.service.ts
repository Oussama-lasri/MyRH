import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/AuthUser';
import { JwtAuthenticationResponse } from '../models/JwtAuthenticationResponse';
import { Recruiter } from '../models/Recruiter';
import { SigninRequest } from '../models/SigninRequest';
import { SignUpRequest } from '../models/SignUpRequest';
import { JwtService } from './jwt.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private singUpUrl = 'http://localhost:8080/api/v1/auth/signup';
  private signInUrl = 'http://localhost:8080/api/v1/auth/signin';

  public authRecruiter?: Recruiter | null;
  private authUser?: AuthUser | null;

  constructor(private http: HttpClient, private jwtService: JwtService) {}

  signUp(signUpRequest: SignUpRequest): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(
      `${this.singUpUrl}`,
      signUpRequest
    );
  }
  
  signIn(signInRequest: SigninRequest): Observable<JwtAuthenticationResponse> {
    let token: string | null = '';
    if (this.jwtService.getAuthToken() != null) {
      token = this.jwtService.getAuthToken();
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return this.http.post<JwtAuthenticationResponse>(
      `${this.signInUrl}`,
      signInRequest,
      { headers }
    );
  }


  getAuthUser(): AuthUser | Recruiter |null {

    const recruiterDataString = localStorage.getItem('recruiter');
    if (recruiterDataString) {
      this.authRecruiter = JSON.parse(recruiterDataString);
      return this.authRecruiter!;
    }

    const tokenValue = this.jwtService.getAuthToken!();

    if (tokenValue) {
      const decodedToken: any = jwtDecode(tokenValue);

      const authUser: AuthUser = {
        id: decodedToken.id,
        name: decodedToken.name,
        email: decodedToken.sub,
        role: decodedToken.role,
      };
      this.authUser = authUser;
      return authUser;
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return this.jwtService.getAuthToken() != null;
  }
}

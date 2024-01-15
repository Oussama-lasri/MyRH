import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recruiter } from '../models/Recruiter';
import { PaginationModel } from '../models/PaginationModel';
import { JwtAuthenticationResponse } from '../models/JwtAuthenticationResponse';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class RecruiterService {
  private baseUrl = 'http://localhost:8080/api/v1/recruiters';
  constructor(private http: HttpClient, private jwtService: JwtService) { }

  create(recruiter: Recruiter): Observable<JwtAuthenticationResponse> {
    const formData = new FormData();
    formData.append('id', `${recruiter.id}`);
    formData.append('email', recruiter.email!);
    formData.append('password', recruiter.password!);
    formData.append('login', recruiter.login!);
    formData.append('name', recruiter.name!);
    formData.append('phone', recruiter.phone!);
    formData.append('address', recruiter.address!);
    formData.append('image', recruiter.image!);
    formData.append('role', recruiter.role!);


    let token: string | null = '';
    if (this.jwtService.getAuthToken() != null) {
      token = this.jwtService.getAuthToken();
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post<JwtAuthenticationResponse>(`${this.baseUrl}`, formData, { headers });
  }

  getById(id: number): Observable<Recruiter> {
    return this.http.get<Recruiter>(`${this.baseUrl}/${id}`);
  }

  validate(
    id: number | null,
    code?: string
  ): Observable<boolean> {

    let token: string | null = '';
    if (this.jwtService.getAuthToken() != null) {
      token = this.jwtService.getAuthToken();
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    const url = `${this.baseUrl}/${id}/${code}/validation`;
    return this.http.post<boolean>(url, {}, { headers });
  }
}

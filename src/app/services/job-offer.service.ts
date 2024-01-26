import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationModel } from '../models/PaginationModel';
import { JobOffer } from '../models/JobOffer';
import { JwtService } from './jwt.service';
@Injectable({
  providedIn: 'root',
})
export class JobOfferService implements OnInit {
  private baseUrl = 'http://localhost:8080/api/v1/jobOffers';

  constructor(private http: HttpClient, private jwtService: JwtService) { }
  ngOnInit(): void { 
  }

  getAllJobOffers(): Observable<JobOffer[]> {
    const requestOptions = {
      headers: this.loadHeaders()
    };
    return this.http.get<JobOffer[]>(`${this.baseUrl}`, requestOptions);
  }

  getAllJobOffersByStatus(status: string): Observable<JobOffer[]> {
    const requestOptions = {
      headers: this.loadHeaders()
    };
    return this.http.get<JobOffer[]>(`${this.baseUrl}` + '/status=' + status, requestOptions);
  }

  getJobOfferById(id: number): Observable<JobOffer> {
    const requestOptions = {
      headers: this.loadHeaders()
    };
    return this.http.get<JobOffer>(`${this.baseUrl}/${id}`, requestOptions);
  }

  getJobOffersByRecruiterId(id: number): Observable<JobOffer[]> {
    const requestOptions = {
      headers: this.loadHeaders()
    };
    return this.http.get<JobOffer[]>(`${this.baseUrl}/${id}`, requestOptions);
  }

  getJobOffersByUserId(id: number): Observable<any[]> {
    const requestOptions = {
      headers: this.loadHeaders()
    };
    return this.http.get<any[]>(`${this.baseUrl}/byUser/${id}`, requestOptions);
  }

  createJobOffer(
    jobOffer: JobOffer,
    recruiterId?: number
  ): Observable<JobOffer> {
    const requestOptions = {
      headers: this.loadHeaders()
    };

    return this.http.post<JobOffer>(
      `${this.baseUrl}` + '/' + recruiterId,
      jobOffer, requestOptions
    );
  }


  updateJobOfferStatus(
    jobOfferId?: number,
    newStatus?: string
  ): Observable<string> {
    const url = `${this.baseUrl}/${jobOfferId}/${newStatus}`;
    const requestOptions = {
      headers: this.loadHeaders(),
      responseType: 'text' as 'json'
    };

    return this.http.post<string>(url, {}, requestOptions);
  }



  loadHeaders(): HttpHeaders {
    let token: string | null = '';
    if (this.jwtService.getAuthToken() != null) {
      token = this.jwtService.getAuthToken();
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return headers;
  }
}

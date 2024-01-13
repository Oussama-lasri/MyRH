import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationModel } from '../models/PaginationModel';
import { JobOffer } from '../models/JobOffer';
@Injectable({
  providedIn: 'root',
})
export class JobOfferService implements OnInit {
  private baseUrl = 'http://localhost:8080/api/v1/jobOffers';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  getAllJobOffers(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(`${this.baseUrl}`);
  }
  getAllJobOffersByStatus(status: string): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(`${this.baseUrl}` + '/status=' + status);
  }
  getJobOfferById(id: number): Observable<JobOffer> {
    return this.http.get<JobOffer>(`${this.baseUrl}` + id);
  }

  createJobOffer(
    jobOffer: JobOffer,
    recruiterId?: number
  ): Observable<JobOffer> {
    return this.http.post<JobOffer>(
      `${this.baseUrl}` + '/' + recruiterId,
      jobOffer
    );
  }
  updateJobOfferStatus(
    jobOfferId?: number,
    newStatus?: string
  ): Observable<string> {
    const url = `${this.baseUrl}/${jobOfferId}/${newStatus}`;
    return this.http.post<string>(url, {}, { responseType: 'text' as 'json' });
  }
}

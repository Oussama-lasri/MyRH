import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginationModel } from '../model/PaginationModel';
import { JobOffer } from '../model/JobOffer';
@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private baseUrl = 'http://localhost:8080/api/v1/jobOffers';

  constructor(private http: HttpClient) { }

  getAllJobOffers(): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(`${this.baseUrl}`);
  }
  getAllJobOffersByStatus(status: string): Observable<JobOffer[]> {
    return this.http.get<JobOffer[]>(`${this.baseUrl}` + "/status=" + status);
  }
  getJobOfferById(id: number): Observable<JobOffer> {
    return this.http.get<JobOffer>(`${this.baseUrl}` + id);
  }

  createJobOffer(jobOffer: JobOffer, recruiterId?: number): Observable<JobOffer> {
    return this.http.post<JobOffer>(`${this.baseUrl}` +"/" + recruiterId, jobOffer);
  }

}

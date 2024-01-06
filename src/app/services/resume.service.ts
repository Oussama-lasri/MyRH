import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from '../model/JobOffer';
import { Resume } from '../model/Resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private baseUrl = 'http://localhost:8080/api/v1/resumes';

  constructor(private http: HttpClient) { }

  create(formData: FormData, id: number): Observable<Resume> {
    return this.http.post<Resume>(`${this.baseUrl}` + "/" + id, formData);
  }

  getAllResumeByJobOffer(recruiterId?: number): Observable<Resume[]> {
    return this.http.get<Resume[]>(`${this.baseUrl}`);
  }
  // getAllResumeByJobOffer(recruiterId?: number): Observable<Resume[]> {
  //   return this.http.get<Resume[]>(`${this.baseUrl}`);
  // }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from '../models/JobOffer';
import { Resume } from '../models/Resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private baseUrl = 'http://localhost:8080/api/v1/resumes';

  constructor(private http: HttpClient) { }

  create(formData: FormData, id: number): Observable<Resume> {
    return this.http.post<Resume>(`${this.baseUrl}` + "/" + id, formData);
  }

  getAllResumeByJobOffer(recruiterId: number): Observable<Resume[]> {
    return this.http.get<Resume[]>(`${this.baseUrl}` + "/byRecruiter/" + recruiterId);
  }
  // getAllResumeByJobOffer(recruiterId?: number): Observable<Resume[]> {
  //   return this.http.get<Resume[]>(`${this.baseUrl}`);
  // }
}

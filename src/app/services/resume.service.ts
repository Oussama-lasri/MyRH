import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from '../models/JobOffer';
import { Resume } from '../models/Resume';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private baseUrl = 'http://localhost:8080/api/v1/resumes';

  constructor(private http: HttpClient, private jwtService: JwtService) { }

  create(formData: FormData, id: number): Observable<Resume> {
    const requestOptions = {
      headers: this.loadHeaders()
    };
    return this.http.post<Resume>(`${this.baseUrl}/${id}`, formData);
  }

  getAllResumeByJobOffer(recruiterId: number): Observable<Resume[]> {
    return this.http.get<Resume[]>(`${this.baseUrl}` + "/byRecruiter/" + recruiterId);
  }
  getAllResumeByUser(userId: number): Observable<Resume[]> {
    return this.http.get<Resume[]>(`${this.baseUrl}` + "/byUser/" + userId);
  }
  // getAllResumeByJobOffer(recruiterId?: number): Observable<Resume[]> {
  //   return this.http.get<Resume[]>(`${this.baseUrl}`);
  // }

  loadHeaders(): HttpHeaders {
    let token: string | null = '';
    if (this.jwtService.getAuthToken() != null) {
      token = this.jwtService.getAuthToken();
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    // alert(headers.get('Authorization'))
    return headers;
  }
}

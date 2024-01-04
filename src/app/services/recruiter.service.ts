import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recruiter } from '../model/Recruiter';
import { PaginationModel } from '../model/PaginationModel';


@Injectable({
  providedIn: 'root'
})
export class RecruiterService {
  private baseUrl = 'http://localhost:8080/api/v1/recruiters';


  constructor(private http: HttpClient) { }

  
  create(recruiter: Recruiter): Observable<Recruiter> {
    const formData = new FormData();
    formData.append("email", recruiter.email!);
    formData.append("password", recruiter.password!);
    formData.append("login", recruiter.login!);
    formData.append("phone", recruiter.phone!);
    formData.append("address", recruiter.address!);
    formData.append("image", recruiter.image!);
    
    return this.http.post<Recruiter>(`${this.baseUrl}`, formData);
  }

  getAll(): Observable<PaginationModel<Recruiter>> {
    return this.http.get<PaginationModel<Recruiter>>(`${this.baseUrl}`);
  }
}

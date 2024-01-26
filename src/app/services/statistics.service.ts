import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private baseUrl = 'http://localhost:8080/api/v1/recruiters';
  constructor(private http: HttpClient, private jwtService: JwtService) { }
  getStatistics(id: number): Observable<any> {
    const requestOptions = {
      headers: this.loadHeaders()
    };
    return this.http.get<any>(`${this.baseUrl}/statistics/${id}`, requestOptions);
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

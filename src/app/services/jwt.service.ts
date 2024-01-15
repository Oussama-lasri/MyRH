import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthUser } from '../models/AuthUser';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private authToken: string | null = null;
  // const decodedToken: any = jwt_decode('token');

  constructor(private http: HttpClient) {
    this.loadTokenFromStorage();
  }

  loadTokenFromStorage(): void {
    const storedToken = window.localStorage.getItem('token');

    if (storedToken) {
      const parsedToken = JSON.parse(storedToken);
      this.authToken = parsedToken.token;
    }
  }

  getAuthToken(): string | null {
    return this.authToken;
  }

  setAuthToken(token: string): void {
    window.localStorage.setItem('token', JSON.stringify({ token }));
    this.authToken = token;
  }

  clearAuthToken(): void {
    window.localStorage.removeItem('token');
    this.authToken = null;
  }
}

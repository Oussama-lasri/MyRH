import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private authToken: string | null = null;

  constructor(private http: HttpClient) {
    // Initialize the authToken from localStorage during service creation
    this.loadTokenFromStorage();
  }

  private loadTokenFromStorage(): void {
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
    // Save the token to localStorage
    window.localStorage.setItem('token', JSON.stringify({ token }));
    // Update the authToken property
    this.authToken = token;
  }

  clearAuthToken(): void {
    // Remove the token from localStorage
    window.localStorage.removeItem('token');
    // Reset the authToken property
    this.authToken = null;
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { Observable, throwError } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { JwtService } from './jwt.service';
import { AppComponent } from '../app.component';
import { AuthUser } from '../models/AuthUser';
import { AuthenticationService } from './authentication.service';
import { ClientDTO } from '../models/ClientDTO';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private stompClient: any;

  constructor(
    private jwtService: JwtService,
    private http: HttpClient,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  async connect(): Promise<void> {
    return new Promise<void>((resolve) => {
      if (this.stompClient && this.stompClient.connected) {
        console.log('WebSocket connection is already open.');
        resolve();
      } else {
        const socket = new SockJS('http://localhost:8080/ws');
        this.stompClient = Stomp.over(socket);

        const requestOptions = {
          headers: this.loadHeaders(),
        };

        this.stompClient.connect(requestOptions, () => {
          console.log('WebSocket Connected');
          resolve();
        });
      }
    });
  }

  addUser(clientDTO: ClientDTO): Observable<any> {

    return new Observable((observer) => {

      if (this.stompClient && this.stompClient.connected) {
        const requestOptions = {
          headers: this.loadHeaders(),
        };
        this.stompClient.send('/app/user.addUser', requestOptions, JSON.stringify(clientDTO));
        observer.next();
        observer.complete();
      } else {
        alert('error');
        console.error('WebSocket connection is not open.');
      }
    });
  }

  disconnect(): void {
    this.connect().then(() => {
      const requestOptions = {
        headers: this.loadHeaders(),
      };

      const authUser = <AuthUser>this.authService.getAuthUser();
      const clientDTO: ClientDTO = {
        clientId: authUser.id,
      };
      this.stompClient.send('/app/user.disconnectUser', requestOptions, JSON.stringify(clientDTO));
      this.stompClient.disconnect();
      console.log('WebSocket Disconnected');

      this.jwtService.clearAuthToken();
      localStorage.removeItem('recruiter');
      this.router.navigate(['/login']);
    });
  }

  getConnectedUsers(): Observable<any[]> {
    const requestOptions = {
      headers: this.loadHeaders(),
    };

    return this.http.get<any[]>('http://localhost:8080/users', requestOptions);
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

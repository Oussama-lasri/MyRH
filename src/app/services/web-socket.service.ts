import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { clientDTO } from '../models/ClientDTO';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: any;

  constructor(private jwtService: JwtService, private http: HttpClient) { }

  connect(): void {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);

    const requestOptions = {
      headers: this.loadHeaders()
    };
    this.stompClient.connect(requestOptions, () => {
      console.log('WebSocket Connected');
    });

  }

  disconnect(): void {
    if (this.stompClient) {
      const requestOptions = {
        headers: this.loadHeaders()
      };
      this.stompClient.send('/app/user.disconnectUser', requestOptions, '')
      this.stompClient.disconnect();
      console.log('WebSocket Disconnected');
    }
  }

  addUser(clientDTO: clientDTO): Observable<any> {
    const requestOptions = {
      headers: this.loadHeaders()
    };

    // return this.stompClient.send("/app/user.addUser",
    //   { requestOptions },
    //   JSON.stringify({ userId: 1, status: 'ONLINE' }))

    console.log(clientDTO);
    
    return new Observable(observer => {
        this.stompClient.send('/app/user.addUser', this.loadHeaders(), clientDTO);
      });
  }
  // addUser(clientDTO: clientDTO): Observable<any> {
  //   const headers = this.loadHeaders(); // Assuming this function returns the necessary headers

  //   return this.stompClient.send('/app/user.addUser', headers, JSON.stringify(clientDTO));
  // }


  disconnectUser(clientDTO: any): Observable<any> {
    return new Observable(observer => {
      this.stompClient.send('/app/user.disconnectUser', {}, JSON.stringify(clientDTO));
      // You can handle the response here if needed
    });
  }

  getConnectedUsers(): Observable<any[]> {
    // return new Observable(observer => {
    const requestOptions = {
      headers: this.loadHeaders()
    };

    return this.http.get<any[]>("http://localhost:8080/users", requestOptions);
  };


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

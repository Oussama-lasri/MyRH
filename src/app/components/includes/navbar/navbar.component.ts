import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUser } from 'src/app/models/AuthUser';
import { ClientDTO } from 'src/app/models/ClientDTO';
import { Recruiter } from 'src/app/models/Recruiter';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtService } from 'src/app/services/jwt.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthenticationService, private jwtService: JwtService, private webSocketService: WebSocketService) { }
  logout() {
    this.webSocketService.disconnect();
  }
  authUser?: AuthUser | null;
  ngOnInit(): void {
    this.authUser = <AuthUser>this.authService.getAuthUser();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/models/Recruiter';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JwtService } from 'src/app/services/jwt.service';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';
import { WebSocketService } from 'src/app/services/web-socket.service';
import { ClientDTO } from 'src/app/models/ClientDTO';
import { AuthUser } from 'src/app/models/AuthUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}

  signInForm: FormGroup;
  errorMessages: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private jwtService: JwtService,
    private router: Router,
    private webSocketService: WebSocketService
  ) {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required, Validators.pattern(/\S+/)]],
    });
  }

  async signIn() {
    this.errorMessages = [];

    const signInFormValue = { ...this.signInForm.value };

    this.authService.signIn(signInFormValue).subscribe({
      next: (jwtToken) => {
        localStorage.setItem('token', JSON.stringify(jwtToken));
        this.jwtService.loadTokenFromStorage();

        const tokenValue = this.jwtService.getAuthToken!();

        this.webSocketService.connect().then(() => {
          const authUser = <AuthUser>this.authService.getAuthUser();
          const clientDTO: ClientDTO = {
            clientId: authUser.id,
          };
          this.webSocketService.addUser(clientDTO).subscribe(
            () => {
              // Handle success, if needed
              console.log('User added successfully');
            },
            (error) => {
              // Handle errors, if needed
              console.error('Error adding user:', error);
            }
          );
          if (tokenValue) {
            const userRole = this.authService.getAuthUser()?.role;

            switch (userRole) {
              case 'AGENT':
                this.router.navigate(['/agent-dash']);
                break;
              case 'RECRUITER':
                this.router.navigate(['/dashboard']);
                break;
              default:
                this.router.navigate(['/']);
            }
          }
        });
      },
      error: (error) => {
        console.log('ERROR: ', error);

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error,
          footer: error,
        });
      },
    });
  }

  errorMessagesMapping: { [key: string]: string } = {};
}

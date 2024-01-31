import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Swal from 'sweetalert2';
import { JwtService } from 'src/app/services/jwt.service';
import { AuthUser } from 'src/app/models/AuthUser';
import { ClientDTO } from 'src/app/models/ClientDTO';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  ngOnInit(): void {}

  signUpForm: FormGroup;
  errorMessages: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private jwtService: JwtService,
    private webSocketService: WebSocketService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/\S+/)]],
      email: ['', [Validators.required, Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password: ['', [Validators.required, Validators.pattern(/\S+/)]],
      role: ['USER'],
    });
  }

  signUp() {
    this.errorMessages = [];

    const signUpFormValue = { ...this.signUpForm.value };
    this.authService.signUp(signUpFormValue).subscribe({
      next: (jwtToken) => {
        localStorage.setItem('token', JSON.stringify(jwtToken));
        this.jwtService.loadTokenFromStorage();

        this.webSocketService.connect().then(() => {
          const authUser = <AuthUser>this.authService.getAuthUser();
          const clientDTO: ClientDTO = {
            clientId: authUser.id,
          };
          this.webSocketService.addUser(clientDTO).subscribe(
            () => {
              console.log('User added successfully');
              
            },
            (error) => {
              console.error('Error adding user:', error);
            }
          );
        });
        
        this.router.navigate(['/']);
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: error,
        });
        console.log(error.error);
      },
    });
  }

  errorMessagesMapping: { [key: string]: string } = {};
}

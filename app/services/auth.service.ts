import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;

  logIn(): void {
    this.isLogged = true;
    console.log('Now you are logged in');
  }

  logOut(): void {
    this.isLogged = false;
    console.log('Now you are logged out');
  }
}

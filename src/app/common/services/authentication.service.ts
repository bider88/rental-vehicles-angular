import { API } from './../../config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  hasSession = false;
  user: any;

  constructor(
    public http: HttpClient
  ) { }

  public isLoggedIn() {
    // const user = ''
    return true;
  }

  public login(email: string, password: string) {
    const url = `${API.AUTH_SERVICES_BASE_URL}/auth/login`;
    return this.http.post(url, {
      email,
      password
    });
  }
}

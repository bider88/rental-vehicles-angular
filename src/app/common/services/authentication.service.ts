import { API } from './../../config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  hasSession = false;
  user: any;

  constructor(
    public http: HttpClient,
    public sessionStorage: SessionStorageService,
    public router: Router
  ) { }

  public isLoggedIn() {
    const user = this.sessionStorage.retrieve('user');
    if (!!user) {
      this.user = user;
      this.hasSession = true;
    }
    return this.hasSession;
  }

  public login(email: string, password: string) {
    const url = `${API.AUTH_SERVICES_BASE_URL}/auth/login`;
    return this.http.post(url, {
      email,
      password
    });
  }

  public logout() {
    this.hasSession = false;
    this.sessionStorage.clear('user');
    this.router.navigateByUrl('/home');
  }
}

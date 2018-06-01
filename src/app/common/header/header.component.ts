import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AfterLoginActionsService } from '../services/after-login-actions.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isModalActive = false;

  constructor(
    public authService: AuthenticationService,
    public afterLoginActionsService: AfterLoginActionsService
  ) { }

  ngOnInit() {
    this.afterLoginActionsService.onLoginCompleted.subscribe(
      (message: string) => {
        this.toggleModal();
      }
    );
  }

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  logout() {
    this.authService.logout();
  }

}

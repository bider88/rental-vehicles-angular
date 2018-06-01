import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../common/services/authentication.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { AfterLoginActionsService } from '../../../common/services/after-login-actions.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: any = {
    email: 'esmeralda@webtraining.zone',
    password: 'esmeralda'
  };

  constructor(
    public authService: AuthenticationService,
    public sessionStorage: SessionStorageService,
    public afterLoginService: AfterLoginActionsService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.login(this.user.email, this.user.password).subscribe(
      data => {
        console.log(data);
        this.authService.user = data;
        this.authService.hasSession = true;
        this.sessionStorage.store('user', data);

        this.afterLoginService.onLoginCompleted.emit('Done');

        this.router.navigate(['/auth-home']);
      },
      error => {
        this.authService.hasSession = false;
      },
      () => console.log('finished')
    );
  }

}

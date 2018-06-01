import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginActionsService {

  onLoginCompleted = new EventEmitter();

  constructor() { }
}

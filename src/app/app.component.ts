import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <app-user-form></app-user-form>
    <p>User Name from Service: {{ userName }}</p>
  `,
})
export class AppComponent {
  title = 'UserNameApp';
  userName: string = '';

  constructor(private userService: UserService) {
    this.userName = this.userService.getUserName();
  }
}

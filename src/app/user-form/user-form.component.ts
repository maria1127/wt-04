import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  template: `
    <input type="text" [(ngModel)]="userName" placeholder="Enter your name" />
    <button (click)="printUserName()">Print Name</button>
  `,
})
export class UserFormComponent {
  userName: string = '';

  constructor(private userService: UserService) {}

  printUserName(): void {
    this.userService.setUserName(this.userName);
    console.log('User Name:', this.userName);
  }
}

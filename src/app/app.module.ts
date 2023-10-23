import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [AppComponent, UserFormComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}

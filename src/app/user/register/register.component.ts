import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../user.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule], // Include CommonModule and FormsModule
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = new User();

  constructor(private userService: UserService) { }

  onSubmit(): void {
    this.userService.register(this.user).subscribe(
      data => {
        console.log('User registered successfully!', data);
      },
      error => {
        console.error('There was an error during the registration!', error);
      }
    );
  }
}

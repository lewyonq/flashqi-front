import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-header',
  imports: [],
  templateUrl: './auth-header.component.html',
  styleUrl: './auth-header.component.css'
})
export class AuthHeaderComponent {
  constructor(private authService: AuthService) {
  }

  onLogout() {
    this.authService.onLogout();
  }
}

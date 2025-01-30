import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.isAuthenticated$.subscribe(
      isAuthenticated => this.isAuthenticated = isAuthenticated
    );
  }

  onLogin() {
    console.log('Login clicked');
    this.authService.onLogin();
  }
  
  onLogout() {
    this.authService.onLogout();
  }

  handleMenuClick(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
  }
}

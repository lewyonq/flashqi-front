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

  constructor(private authService: AuthService) {}

  onLogin() {
    console.log('Login clicked');
    this.authService.onLogin();
  }

  handleMenuClick(isMenuOpen: boolean) {
    this.isMenuOpen = isMenuOpen;
  }
}

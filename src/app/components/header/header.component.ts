import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
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

  handleMenuClick() {
    console.log('Menu clicked');
  }
}

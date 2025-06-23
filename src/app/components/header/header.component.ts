import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink }   from '@angular/router';

import { MatIconModule }    from '@angular/material/icon';
import { MatButtonModule }  from '@angular/material/button';
import { MatMenuModule }    from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SidebarService } from '../../services/sidebar.service';
import { AuthService }    from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public sidebar: SidebarService,
    public auth:    AuthService
  ) {}
}

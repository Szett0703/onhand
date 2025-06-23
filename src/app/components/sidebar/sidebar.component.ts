import { Component, HostListener, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public sidebar: SidebarService) {
    /* Cierra automáticamente al navegar en móvil */
    effect(() => {
      if (window.innerWidth < 768 && !this.sidebar.collapsed()) {
        setTimeout(() => this.sidebar.close(), 250);   // margen para que el click navegue
      }
    });
  }

  /* Hover sólo si NO es móvil */
  @HostListener('mouseenter') onMouseEnter() {
    if (window.innerWidth >= 768) this.sidebar.open();
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (window.innerWidth >= 768) this.sidebar.close();
  }

  isMobile() { return window.innerWidth < 768; }

}

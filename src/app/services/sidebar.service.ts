import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  /** true → plegada | false → extendida */
  collapsed = signal<boolean>(window.innerWidth < 768);

  toggle() { this.collapsed.update(v => !v); }
  close()  { this.collapsed.set(true); }
  open()   { this.collapsed.set(false); }
}

import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'onhand_token';

/* ──────────────── Usuarios mock ──────────────── */
interface LocalUser { u: string; p: string; role: string; }

const USERS: LocalUser[] = [
  { u: 'admin',   p: 's12345',    role: 'admin'   },
  { u: 'ventas',  p: 'ventas2025', role: 'sales'   },
  { u: 'cajero1', p: 'cajero',     role: 'cashier' }
];

/* ─────────────────────────────────────────────── */

@Injectable({ providedIn: 'root' })
export class AuthService {

  /* signal: true si hay token en localStorage */
  loggedIn = signal<boolean>(!!localStorage.getItem(TOKEN_KEY));

  /* opcional: guarda el usuario logueado */
  currentUser = signal<LocalUser | null>(null);

  constructor(private router: Router) {}

  /** Login local */
  async login(username: string, password: string): Promise<boolean> {
    return new Promise(resolve => {
      const user = USERS.find(u => u.u === username && u.p === password);
      if (user) {
        localStorage.setItem(TOKEN_KEY, 'dummy-local-token');
        this.loggedIn.set(true);
        this.currentUser.set(user);
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    this.loggedIn.set(false);
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}

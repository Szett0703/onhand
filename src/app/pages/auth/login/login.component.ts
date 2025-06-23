import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule, FormBuilder, Validators,
  FormGroup, FormControl
} from '@angular/forms';

import { MatCardModule }       from '@angular/material/card';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatButtonModule }     from '@angular/material/button';
import { MatIconModule }       from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,

    /* Material */
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;

  form!: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private snack: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.nonNullable.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  async submit(): Promise<void> {
    if (this.form.invalid) return;

    const { username, password } = this.form.getRawValue();
    const ok = await this.auth.login(username, password);

    if (ok) {
      this.router.navigate(['/on-hand']);
    } else {
      this.snack.open('Credenciales incorrectas', 'Cerrar', { duration: 3000 });
      this.form.reset();
    }
  }
}

import { Component } from '@angular/core';
import { ProductosTableComponent } from './productos-table/productos-table.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [ProductosTableComponent],
  template: `<app-productos-table></app-productos-table>`
})
export class ProductosComponent {}

import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

/* ---------- Angular Material ---------- */
import { MatTableModule }    from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule }           from '@angular/material/sort';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatCardModule }       from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

/* ---------- Datos y diálogo ---------- */
import { MatTableDataSource } from '@angular/material/table';
import { PRODUCTS, Product }  from '../product.model';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-productos-table',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,

    /* ➜ añadidos para el pop-up */
    MatDialogModule,
  ],
  templateUrl: './productos-table.component.html',
  styleUrls: ['./productos-table.component.css']
})
export class ProductosTableComponent {

  displayedColumns: string[] = [
    'upc', 'brand', 'productName',
    'inventory', 'ourPrice'
  ];

  dataSource = new MatTableDataSource<Product>(PRODUCTS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)      sort!:      MatSort;

  /* ➜ inyectamos MatDialog */
  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort      = this.sort;
  }

  /* ---------- Filtro en la tabla ---------- */
  applyFilter(event: Event) {
    const value = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  /* ---------- Abrir pop-up con el producto ---------- */
  openDialog(product: Product): void {
    this.dialog.open(ProductDialogComponent, {
      data: product,
      width: '720px',
      autoFocus: false
    });
  }
}

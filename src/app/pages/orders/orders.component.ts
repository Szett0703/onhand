// src/app/pages/orders/orders.component.ts

declare var jsPDF: any;  // Opción 3: anular tipado de jsPDF

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule     } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule     } from '@angular/material/input';
import { MatButtonModule    } from '@angular/material/button';
import { MatDialogModule    } from '@angular/material/dialog';
import { MatCheckboxModule  } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule      } from '@angular/material/sort';
import { MatIconModule      } from '@angular/material/icon';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog           } from '@angular/material/dialog';
import 'jspdf-autotable';  // parchea jsPDF.prototype.autoTable en tiempo de ejecución

import { OrderModel, orders } from '../../models/order.model';
import { NewOrderDialogComponent } from './new-order-dialog/new-order-dialog.component';

@Component({
  selector:    'app-orders',
  standalone:  true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  templateUrl: './orders.component.html',
  styleUrls:   ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  dataSource = new MatTableDataSource<OrderModel>(orders);
  displayedColumns = [
    'upcCode','brand','descEN1',
    'sold7Days','sold30Days','sold90Days','sold180Days',
    'actions'
  ];

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  newOrder(): void {
    const ref = this.dialog.open(NewOrderDialogComponent, {
      width: '800px',
      data: orders
    });
    ref.afterClosed().subscribe(selected => {
      if (selected && selected.length) {
        this.generatePDF(selected);
      }
    });
  }

  private generatePDF(selected: { item: OrderModel; qty: number }[]): void {
    const doc = new jsPDF();
    const rows = selected.map(s => [
      s.item.upcCode,
      s.item.brand,
      s.item.descEN1,
      s.qty
    ]);
    // Opción 3: usar autoTable sin tipado
    doc.autoTable({
      head: [['UPC', 'Brand', 'Description', 'Qty']],
      body: rows
    });
    doc.save('order.pdf');
  }
}

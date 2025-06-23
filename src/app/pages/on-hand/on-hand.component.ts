// on-hand.component.ts
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { MatToolbarModule }   from '@angular/material/toolbar';
import { MatIconModule }      from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatButtonModule }    from '@angular/material/button';
import { MatCardModule }      from '@angular/material/card';
import { MatDividerModule }   from '@angular/material/divider';
import { MatChipsModule }     from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { SalesDialogComponent } from './sales-dialog/sales-dialog.component';
import { Product, PRODUCTS }    from '../productos/product.model';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-on-hand',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
    SalesDialogComponent,
  ],
  templateUrl: './on-hand.component.html',
  styleUrls: ['./on-hand.component.css']
})
export class OnHandComponent implements AfterViewInit {
  @ViewChild('salesChart', { static: true })
  salesChartRef!: ElementRef<HTMLCanvasElement>;

  upc = new FormControl<string>('', [
    Validators.required,
    Validators.pattern(/^\d{10,12}$/)
  ]);

  product: Product | null = null;
  notFound = false;
  private chart!: Chart;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.chart = new Chart(this.salesChartRef.nativeElement.getContext('2d')!, {
      type: 'line',
      data: {
        labels: ['7 DÍAS','30 DÍAS','90 DÍAS','180 DÍAS'],
        datasets: [{
          label: 'Promedio diario',
          data: [0,0,0,0],
          fill: false,
          tension: 0.4,
          borderWidth: 2,
        }]
      },
      options: {
        scales: {
          x: { title: { display: true, text: 'Periodo' } },
          y: { title: { display: true, text: 'Ventas por día' }, beginAtZero: true }
        },
        plugins: { legend: { display: false } }
      }
    });
  }

  /** Buscar por coincidencia parcial */
  search(): void {
    if (this.upc.invalid) { this.reset(); return; }
    const fragment = this.upc.value!;
    this.product  = PRODUCTS.find(p => p.upc.includes(fragment)) ?? null;
    this.notFound = !this.product;
    this.upc.reset('');
    this.updateChart();
  }

  reset(): void {
    this.upc.reset('');
    this.product  = null;
    this.notFound = false;
    this.updateChart();
  }

  /** Abre el diálogo de ventas */
  openSales(days: number, total: number, label: string): void {
    this.dialog.open(SalesDialogComponent, {
      data: { days, total, label },
      width: '650px',
      autoFocus: false
    });
  }

  /** Actualiza los datos del gráfico */
  private updateChart(): void {
    const vals = this.product
      ? [
          this.product.sell7days  / 7,
          this.product.sell30days / 30,
          this.product.sell90days / 90,
          this.product.sell180days/ 180
        ]
      : [0,0,0,0];
    this.chart.data.datasets[0].data = vals;
    this.chart.update();
  }
}

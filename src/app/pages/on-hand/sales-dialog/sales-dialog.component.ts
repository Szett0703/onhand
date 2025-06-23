import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-sales-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, BaseChartDirective],
  templateUrl: './sales-dialog.component.html',
  styleUrls: ['./sales-dialog.component.css']
})
export class SalesDialogComponent {
  public lineLabels: string[];
  public lineData: ChartConfiguration<'line'>['data'];
  public lineOptions: ChartOptions<'line'>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { days: number; total: number; label: string }
  ) {
    this.lineLabels = Array.from({ length: data.days }, (_, i) => `Día ${i + 1}`);
    const avg = data.total / data.days;
    this.lineData = {
      labels: this.lineLabels,
      datasets: [{
        data: this.lineLabels.map((_, i) => Math.round(avg * (i + 1))),
        label: `Ventas (${data.label})`,
        fill: false,
        tension: 0.3,
        borderColor: '#1976d2',
        pointBackgroundColor: '#1976d2'
      }]
    };
    this.lineOptions = {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'Días' } },
        y: { title: { display: true, text: 'Ventas' }, beginAtZero: true }
      },
      plugins: { legend: { display: true } }
    };
  }
}

import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { OrderModel } from '../../../models/order.model';

@Component({
  selector: 'app-new-order-dialog',
  standalone: true,
  imports: [
    CommonModule,           // <— necesario para *ngFor, etc.
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,         // <— añade soporte para mat-table y [dataSource]
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './new-order-dialog.component.html',
  styleUrls: ['./new-order-dialog.component.css']
})
export class NewOrderDialogComponent {
  form;
  dataSource: Array<OrderModel & { selected: boolean; qty: number }>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: OrderModel[],
    private dialogRef: MatDialogRef<NewOrderDialogComponent>,
    private fb: FormBuilder
  ) {
    // Inicializar dataSource con flags de selección y qty
    this.dataSource = data.map(item => ({
      ...item,
      selected: false,
      qty: 0
    }));
    // Construir FormArray a partir de dataSource
    const arr = this.fb.array(
      this.dataSource.map(() =>
        this.fb.group({
          selected: [false],
          qty: [0, Validators.min(1)]
        })
      )
    );
    this.form = this.fb.group({ items: arr });
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  submit(): void {
    const selected = this.items.controls
      .map((ctrl, i) => ({ ctrl: ctrl.value, item: this.dataSource[i] }))
      .filter(x => x.ctrl.selected && x.ctrl.qty > 0)
      .map(x => ({ item: x.item, qty: x.ctrl.qty }));

    this.dialogRef.close(selected);
  }
}

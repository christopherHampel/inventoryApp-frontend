import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { InventoryListComponent } from '../inventory-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-dialog',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogClose,
  ],
  templateUrl: './add-item-dialog.component.html',
  styleUrl: './add-item-dialog.component.scss',
})
export class AddItemDialogComponent {
  readonly dialogRef = inject(MatDialogRef<InventoryListComponent>);
  productName:string = '';

  addProduct() {
    console.log(this.productName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

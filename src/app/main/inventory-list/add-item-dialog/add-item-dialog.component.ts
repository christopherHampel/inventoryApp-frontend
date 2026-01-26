import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryListComponent } from '../inventory-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogClose } from '@angular/material/dialog';
import { ItemsService } from '../../../services/items.service';

interface ItemData {
  name: string;
  category: string;
  amount: number;
}

@Component({
  selector: 'app-add-item-dialog',
  imports: [
    CommonModule,
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
  readonly itemsService = inject(ItemsService);
  readonly data = inject(MAT_DIALOG_DATA, { optional: true });
  
  name: string = '';
  category: string = '';
  amount: number = 0; // Default Wert ist 0
  mode: 'product' | 'category' = this.data?.mode || 'product'; // Modus aus Daten oder Standard 'product'

  addProduct(): void {
    if (this.mode === 'product') {
      const itemData: ItemData = {
        name: this.name,
        category: this.category,
        amount: this.amount
      };

      console.log('Item Data:', JSON.stringify(itemData, null, 2));
      
      // Kategorie zum Service hinzufügen, falls vorhanden
      if (this.category && this.category.trim() !== '') {
        this.itemsService.addCategory(this.category);
      }
    } else {
      // Neue Kategorie hinzufügen
      if (this.category && this.category.trim() !== '') {
        this.itemsService.addCategory(this.category);
        console.log('Neue Kategorie hinzugefügt:', this.category);
      }
    }
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

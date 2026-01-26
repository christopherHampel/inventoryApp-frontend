import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../services/items.service';
import { MatDialog } from '@angular/material/dialog';
import { AddItemDialogComponent } from '../../main/inventory-list/add-item-dialog/add-item-dialog.component';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  itemsService = inject(ItemsService);
  dialog = inject(MatDialog);
  showCategories = false;

  toggleCategories(): void {
    this.showCategories = !this.showCategories;
  }

  selectCategory(category: string | null): void {
    // Hier kann später die Filterlogik implementiert werden
    console.log('Selected category:', category || 'Alle');
  }

  openAddCategoryDialog(): void {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: { mode: 'category' }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Category dialog was closed');
    });
  }
}

import { Component } from '@angular/core';
import { SingleItemComponent } from './single-item/single-item.component';

@Component({
  selector: 'app-inventory-list',
  imports: [ SingleItemComponent ],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.scss'
})
export class InventoryListComponent {

}

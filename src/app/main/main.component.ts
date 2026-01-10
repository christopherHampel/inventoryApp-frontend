import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, InventoryListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

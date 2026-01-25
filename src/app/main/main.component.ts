import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  imports: [HeaderComponent, InventoryListComponent, SidebarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

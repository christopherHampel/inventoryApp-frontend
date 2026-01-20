import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private itemsSignal = signal<any[]>([]);
  items = this.itemsSignal.asReadonly();

  constructor(private http: HttpClient) {}

  loadItems() {
    this.http.get<any[]>('http://localhost:3000/items')
      .subscribe({
        next: data => this.itemsSignal.set(data),
        error: err => console.error(err)
      });
  }
}

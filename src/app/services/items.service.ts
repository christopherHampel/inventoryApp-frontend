import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  itemsSignal = signal<any[]>([]);
  items = this.itemsSignal.asReadonly();
  
  categoriesSignal = signal<string[]>([]);
  categories = this.categoriesSignal.asReadonly();

  constructor(private http: HttpClient) {}

  loadItems() {
    this.http.get<any[]>('http://localhost:3000/items')
      .subscribe({
        next: data => {
          this.itemsSignal.set(data);
          this.extractCategoriesFromItems(data);
        },        
        error: err => console.error(err)
      });
  }

  addCategory(category: string): void {
    if (category && category.trim() !== '') {
      const trimmedCategory = category.trim();
      const currentCategories = this.categoriesSignal();
      if (!currentCategories.includes(trimmedCategory)) {
        this.categoriesSignal.update(cats => [...cats, trimmedCategory].sort());
      }
    }
  }

  private extractCategoriesFromItems(items: any[]): void {
    const categories = new Set<string>();
    items.forEach(item => {
      if (item.category && item.category.trim() !== '') {
        categories.add(item.category.trim());
      }
    });
    this.categoriesSignal.set(Array.from(categories).sort());
  }
}

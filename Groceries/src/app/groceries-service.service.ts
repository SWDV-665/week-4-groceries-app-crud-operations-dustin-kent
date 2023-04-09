import { Injectable } from "@angular/core";

interface GroceryItem {
  name: string[];
  quantity: string[];
}

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

   items: GroceryItem[] = [
  
  ];

  constructor() {
    console.log("Hello GroceriesServiceProvider Provider");
   }

   getItems() {
    return this.items;
   }

   removeItem(index: number) {
    this.items.splice(index,1);
   }

   addItem(item: any) {
    this.items.push(item);
   }

   editItem(item: any, index: number) {
    this.items[index] = item;
   }
}


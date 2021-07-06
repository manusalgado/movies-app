import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const ITEMS = 'users';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  public setItem(item: any): Promise<any> {
    return this.storage.get(ITEMS).then((items: any[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS, items);
      } else {
        return this.storage.set(ITEMS, [item]);
      }
    })
  }

  public getItems(): Promise<any> {
    return this.storage.get(ITEMS);
  }

  public deleteItem(): void {}

  public updateItems(items): void {}
}

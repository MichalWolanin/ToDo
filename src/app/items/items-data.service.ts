import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {

  data = [
    {
      name: "Item 1"
    },
    {
      name: "Item 2"
    },
    {
      name: "Item 3"
    },

  ]

  getData() {
    return this.data
  }

  constructor() { }
}

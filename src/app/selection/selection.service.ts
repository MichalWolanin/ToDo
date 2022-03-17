import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService<T> {

  constructor() { }

  selection: T | undefined

  setSelection(item:T) {
    this.selection = item
    this.selectionChange.emit(this.selection)
  }

  selectionChange = new EventEmitter<T>()
}

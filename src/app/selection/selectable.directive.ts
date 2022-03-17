import {Directive, Host, HostBinding, HostListener, Input} from '@angular/core';
import { Subscription } from 'rxjs';
import {SelectionService} from "./selection.service";

@Directive({
  selector: '[appSelectable]'
})
export class SelectableDirective {

  constructor(@Host() private selection: SelectionService<any>) {
    console.log("hello from selectable")
  }

  @Input('appSelectable')
  item: any

  @HostListener('click')
  select() {
    this.selection.setSelection(this.item)
  }

  @HostBinding('class.active')
  selected = false

  subscription: Subscription | undefined

  ngOnDestroy(){
    this.subscription!.unsubscribe()
  }

  ngOnInit() {
    this.selected = this.selection.selection == this.item

    this.subscription =
    this.selection.selectionChange.subscribe(selection =>{
      this.selected = selection == this.item

    })
  }
}

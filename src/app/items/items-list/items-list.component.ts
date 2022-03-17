import {Component, OnInit } from '@angular/core';
import {ItemsDataService} from "../items-data.service";
import {SelectionService} from "../../selection/selection.service";

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
  viewProviders: [
    SelectionService
  ]
})
export class ItemsListComponent implements OnInit {

  items: { name: string } [] = [];
  value: string = "";

  constructor(private service: ItemsDataService) {
    this.items = service.getData();
  }

  ngOnInit(): void {
  }

  addItem(event: any) {
    const value = event.target.value;
    this.items.push({name:value});
  }
}

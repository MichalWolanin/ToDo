import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksListComponent} from "../../components/tasks-list/tasks-list.component";
import {TaskAddComponent} from "../../components/task-add/task-add.component";

@Component({
  selector: 'to-do-dashboard',
  standalone: true,
  imports: [CommonModule, TasksListComponent, TaskAddComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}

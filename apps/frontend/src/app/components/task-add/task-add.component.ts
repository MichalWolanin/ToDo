import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from '../tasks-list/tasks-list.component';

@Component({
  selector: 'to-do-task-add',
  standalone: true,
  imports: [CommonModule, TasksListComponent],
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  value?: string;

  addTask() {}
}

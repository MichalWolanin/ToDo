import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { DataService } from '../../services/data.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'to-do-task-add',
  standalone: true,
  imports: [CommonModule, TasksListComponent],
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  @ViewChild('taskInput') taskInput?: ElementRef;
  task: Task = { title: '', isDone: false };

  constructor(private dataService: DataService) {}

  addTask() {
    const inputValue = (this.taskInput?.nativeElement as HTMLInputElement)
      .value;

    if (inputValue && inputValue.trim() !== '') {
      this.task.title = inputValue || '';
      this.dataService.postData(this.task).subscribe(() => {});
    }
  }
}

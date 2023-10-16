import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from '../tasks-list/tasks-list.component';
import { TaskService } from '../../services/task.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CreateTaskRequest } from '../../models/create-task-request.model';

@Component({
  selector: 'to-do-task-add',
  standalone: true,
  imports: [CommonModule, TasksListComponent, ReactiveFormsModule],
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  taskTitleControl = new FormControl('');
  private destroyRef = inject(DestroyRef);

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const inputValue = this.taskTitleControl.value;

    if (inputValue && inputValue.trim() !== '') {
      const task: CreateTaskRequest = { title: inputValue };
      this.taskService
        .createTask(task)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.taskTitleControl.reset();
        });
    }
  }
}

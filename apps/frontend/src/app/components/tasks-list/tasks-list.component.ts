import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { UpdateTaskRequest } from '../../models/update-task-request.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../models/get-task.model';

@Component({
  selector: 'to-do-tasks-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  tasks$ = this.taskService.getTasks();
  private destroyRef = inject(DestroyRef);

  constructor(private taskService: TaskService) {}

  updateTask(task: Task): void {
    const updateTaskRequest: UpdateTaskRequest = {
      title: task.title,
      isDone: !task.isDone,
    };
    this.taskService
      .updateTask(task.id, updateTaskRequest)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.tasks$ = this.taskService.getTasks();
        console.log('update');
      });
  }
}

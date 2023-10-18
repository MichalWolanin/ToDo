import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../models/get-task.model';
import { UpdateTaskRequest } from '../../models/update-task-request.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CreateTaskRequest } from '../../models/create-task-request.model';

@Component({
  selector: 'to-do-tasks-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TaskComponent],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  tasks$ = this.taskService.getTasks();
  taskTitleControl = new FormControl('');
  private destroyRef = inject(DestroyRef);

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const inputValue = this.taskTitleControl.value;

    if (inputValue && inputValue.trim() !== '') {
      const task: CreateTaskRequest = {
        title: inputValue,
      };
      this.taskService
        .createTask(task)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
          this.taskTitleControl.reset();
          this.tasks$ = this.taskService.getTasks();
        });
    }
  }

  onToggleDoneStatus(task: Task): void {
    const updateTaskRequest: UpdateTaskRequest = {
      title: task.title,
      isDone: !task.isDone,
    };
    this.taskService
      .updateTask(task.id, updateTaskRequest)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.tasks$ = this.taskService.getTasks();
      });
  }

  onEditTitle(task: Task, newTitle: string): void {
    const updateTaskRequest: UpdateTaskRequest = {
      title: newTitle,
      isDone: task.isDone,
    };
    this.taskService
      .updateTask(task.id, updateTaskRequest)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.tasks$ = this.taskService.getTasks();
      });
  }

  onDeleteTask(task: Task): void {
    this.taskService
      .deleteTask(task.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.tasks$ = this.taskService.getTasks();
      });
  }
}

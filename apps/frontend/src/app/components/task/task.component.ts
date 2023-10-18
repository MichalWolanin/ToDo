import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/get-task.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'to-do-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() toggleDoneStatus = new EventEmitter<Task>();
  @Output() editTitle = new EventEmitter<Task>();
  isInputDisplayed = false;
  titleControl = new FormControl();
  private destroyRef = inject(DestroyRef);

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    console.log(this.task);
  }
  showInput(): void {
    this.isInputDisplayed = true;
    this.titleControl.patchValue(this.task.title);
  }

  hideInput() {
    this.isInputDisplayed = false;
  }

  confirmEditTitle() {
    this.isInputDisplayed = false;
    this.editTitle.emit(this.task);
  }

  onDeleteTask(task: Task): void {
    this.taskService
      .deleteTask(task.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {});
  }
}

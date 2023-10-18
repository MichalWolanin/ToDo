import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/get-task.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'to-do-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() toggleDoneStatus = new EventEmitter<void>();
  @Output() editTitle = new EventEmitter<string>();
  @Output() deleteTask = new EventEmitter<void>();
  isInputDisplayed = false;
  titleControl = new FormControl('', { nonNullable: true });

  showInput(): void {
    this.isInputDisplayed = true;
    this.titleControl.patchValue(this.task.title);
  }

  hideInput(): void {
    this.isInputDisplayed = false;
  }

  confirmEditTitle(): void {
    this.isInputDisplayed = false;
    const newTitle = this.titleControl.value;
    this.editTitle.emit(newTitle);
  }

  onDeleteTask(): void {
    this.deleteTask.emit();
  }
}

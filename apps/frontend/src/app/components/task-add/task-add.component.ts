import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'to-do-task-add',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent {
  value?: string;
}

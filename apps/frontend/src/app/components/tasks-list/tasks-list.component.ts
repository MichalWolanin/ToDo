import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'to-do-tasks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {}

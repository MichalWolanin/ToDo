import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTask } from '../../models/get-task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'to-do-tasks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasks: GetTask[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
}

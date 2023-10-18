import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateTaskRequest } from '../models/create-task-request.model';
import { Observable } from 'rxjs';
import { Task } from '../models/get-task.model';
import { UpdateTaskRequest } from '../../../../backend/src/tasks/models/update-task-request.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createTask(task: CreateTaskRequest): Observable<void> {
    return this.http.post<void>(this.API_URL, task);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL);
  }

  updateTask(
    id: string,
    updateTaskRequest: UpdateTaskRequest
  ): Observable<void> {
    return this.http.patch<void>(`${this.API_URL}/${id}`, updateTaskRequest);
  }
}

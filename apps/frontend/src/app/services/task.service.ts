import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CreateTaskRequest } from '../models/create-task-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createTask(task: CreateTaskRequest): Observable<CreateTaskRequest> {
    return this.http.post<CreateTaskRequest>(this.API_URL, task);
  }
}

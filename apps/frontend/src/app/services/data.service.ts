import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  postData(task: Task) {
    return this.http.post<Task>(this.API_URL, task);
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskRequest } from './models/create-task-request.model';
import { CreateTaskResponse } from './models/create-task-response.model';
import { UpdateTaskRequest } from './models/update-task-request.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async addTask(
    @Body() createTaskRequest: CreateTaskRequest
  ): Promise<CreateTaskResponse> {
    const id = await this.tasksService.insertTask(createTaskRequest);
    return { id };
  }

  @Get()
  async getAllTasks(): Promise<
    { id: string; title: string; isDone: boolean }[]
  > {
    return await this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(
    @Param('id') taskId: string
  ): Promise<{ id: string; title: string; isDone: boolean }> {
    return this.tasksService.getSingleTask(taskId);
  }

  @Patch(':id')
  async updateTask(
    @Param('id') taskId: string,
    @Body() updateTaskRequest: UpdateTaskRequest
  ): Promise<void> {
    await this.tasksService.updateTask(taskId, updateTaskRequest);
    return null;
  }

  @Delete(':id')
  async removeTask(@Param('id') taskId: string): Promise<void> {
    await this.tasksService.deleteTask(taskId);
    return null;
  }
}

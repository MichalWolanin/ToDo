import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './models/task.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateTaskRequest } from './models/update-task-request.model';
import { CreateTaskRequest } from './models/create-task-request.model';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async insertTask(createTaskRequest: CreateTaskRequest): Promise<string> {
    const newTask = new this.taskModel({
      title: createTaskRequest.title,
    });
    const result = await newTask.save();
    return result.id as string;
  }

  async getTasks(): Promise<{ id: string; title: string; isDone: boolean }[]> {
    const tasks = await this.taskModel.find().exec();
    return tasks.map((task) => ({
      id: task.id,
      title: task.title,
      isDone: task.isDone,
    }));
  }

  async getSingleTask(
    taskId: string
  ): Promise<{ id: string; title: string; isDone: boolean }> {
    const task = await this.findTask(taskId);
    return {
      id: task.id,
      title: task.title,
      isDone: task.isDone,
    };
  }

  async updateTask(
    taskId: string,
    updateTaskRequest: UpdateTaskRequest
  ): Promise<void> {
    const taskToUpdate = await this.findTask(taskId);
    if (updateTaskRequest.title) {
      taskToUpdate.title = updateTaskRequest.title;
    }
    if (updateTaskRequest.isDone) {
      taskToUpdate.isDone = updateTaskRequest.isDone;
    }
    await taskToUpdate.save();
  }
  async deleteTask(taskId: string): Promise<void> {
    const result = await this.taskModel.deleteOne({ _id: taskId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find task.');
    }
  }

  private async findTask(id: string): Promise<Task> {
    try {
      return await this.taskModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find task.');
    }
  }
}

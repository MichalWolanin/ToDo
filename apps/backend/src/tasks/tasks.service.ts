import {Injectable, NotFoundException} from "@nestjs/common";
import { Task } from "./task.model";
import { InjectModel } from '@nestjs/mongoose'
import {Model} from "mongoose";

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('Task') private readonly taskModel: Model<Task>
  ) {}

  async insertTask(title: string, taskStatus: boolean) {
    const newTask = new this.taskModel({
      title,
      taskStatus,
    });
    const result = await newTask.save();
    return result.id as string;
  }

  async getTasks() {
    const tasks = await this.taskModel.find().exec();
    return tasks.map((task) => ({
      id: task.id,
      title: task.title,
      taskStatus: task.taskStatus,
    }));
  }

  async getSingleTask(taskId: string) {
    const task = await this.findTask(taskId);
    return {
      id: task.id,
      title: task.title,
      taskStatus: task.taskStatus
    };
  }

  async updateTask(
    taskId: string,
    title: string,
    taskStatus: boolean,
    ) {
    const updatedTask = await this.findTask(taskId);
    if (title) {
      updatedTask.title = title;
    }
    if (taskStatus) {
      updatedTask.taskStatus = taskStatus;
    }
    updatedTask.save();
  }
  async deleteTask(taskId: string) {
    const result = await this.taskModel.deleteOne({_id: taskId}).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find task.');
    }
  }

  private async findTask(id: string): Promise<Task> {
    let task;
    try {
      task = await this.taskModel.findById(id).exec()
    } catch (error) {
      throw new NotFoundException('Could not find task.');
    }

    if (!task) {
      throw new NotFoundException('Could not find task.');
    }
    return task;
  }
}

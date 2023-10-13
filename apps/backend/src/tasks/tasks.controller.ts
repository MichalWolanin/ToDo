import {Body, Controller, Delete, Get, Param, Patch, Post,} from "@nestjs/common";

import {TasksService} from "./tasks.service";

@Controller('tasks')
export class TasksController {
  constructor( private readonly tasksService: TasksService) {}

  @Post()
  async addTask(
    @Body('title') taskTitle: string,
    @Body('taskStatus') taskStatus: boolean,
  ) {
    const generatedId = await this.tasksService.insertTask( taskTitle, taskStatus, );
    return { id: generatedId };
  }

  @Get()
  async getAllTasks() {
    return await this.tasksService.getTasks();
  }

  @Get(':id')
  getTask(@Param('id') taskId: string) {
    return this.tasksService.getSingleTask(taskId);
  }

  @Patch(':id')
  async updateTask(
    @Param('id') taskId:string,
    @Body('title') taskTitle: string,
    @Body('taskStatus') taskStatus: boolean,
  ) {
    await this.tasksService.updateTask(taskId, taskTitle, taskStatus);
    return null;
  }

  @Delete(':id')
  async removeTask(@Param('id') taskId: string) {
    await this.tasksService.deleteTask(taskId);
    return null;
  }
}

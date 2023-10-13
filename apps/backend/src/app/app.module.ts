import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TasksModule} from "../tasks/tasks.module";

@Module({
  imports: [TasksModule, MongooseModule.forRoot(
    'mongodb+srv://Adam:8gTkXvrRdxZkTiq9@todo-list.42vanlf.mongodb.net/task-details?retryWrites=true&w=majority')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

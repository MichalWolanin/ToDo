import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from "../../config";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from "../tasks/tasks.module";

@Module({
  imports: [TasksModule, MongooseModule.forRoot(config.mongodbUri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

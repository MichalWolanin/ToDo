import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import config from "../config";

import { TasksModule } from "./tasks/tasks.module";

@Module({
  imports: [TasksModule, MongooseModule.forRoot(config.mongodbUri)],
})
export class AppModule {}

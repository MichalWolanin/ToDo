
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, { cors: true});
  app.enableCors( {
    origin: true,
    methods: 'GET, POST, PATCH, DELETE',
    credentials: true,
  })
  await app.listen(3000);
}

bootstrap();

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET, POST, PATCH, DELETE',
    credentials: true,
  });
  await app.listen(3000);
}

bootstrap();

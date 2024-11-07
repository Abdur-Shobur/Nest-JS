import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(env.port ?? 3000);
  console.log('run at=> '+await app.getUrl());
}
bootstrap();

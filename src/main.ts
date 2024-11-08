import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  const config = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('The Test API description')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(env.port ?? 3000);
  console.log('run at=> ' + (await app.getUrl()));
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express';
import { LoggerService } from 'src/logger/logger.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService('Main'),
  });
  app.enableCors();
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));

  const options = new DocumentBuilder()
    .setTitle('Products API')
    .setDescription('API Rest Products')
    .setVersion('1.0')
    .setContact('Hallison', 'https://bunker.dev', 'hallison.pm@gmail.com')
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: true,
  });

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();

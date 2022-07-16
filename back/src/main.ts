import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import config from 'config';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';

import { AppModule } from './app.module';
import { cors_options_delegate } from './cors.options';

const appSettings = config.get<IAppSettings>('APP_SETTINGS');

async function bootstrap() {
  const server = express();

  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    bodyParser: true,
  });

  app.use(json({ limit: appSettings.body_limit }));

  app.use(
    urlencoded({
      extended: true,
      limit: appSettings.body_limit,
      parameterLimit: appSettings.body_parameter_limit,
    })
  );

  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );

  app.use(cookieParser());

  app.enableCors(cors_options_delegate);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );

  const options = new DocumentBuilder().setTitle('tl.project').setDescription('The tl.project API description').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(appSettings.port);
}

bootstrap();

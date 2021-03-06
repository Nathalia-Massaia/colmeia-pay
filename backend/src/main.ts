import * as helmet from 'helmet';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.setGlobalPrefix('api');

  await app.listen(process.env.APP_PORT);

  logger.log(`API connected on ${await app.getUrl()}`)
}
bootstrap();

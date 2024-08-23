import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { envs } from './config';

async function bootstrap() {

  const logger = new Logger('Payment-Ms')

  const app = await NestFactory.create(AppModule,
    {
      rawBody: true
    }
  );
  await app.listen(envs.port);


  logger.log(`Payment microservice listening port: ${envs.port}`)

}
bootstrap();

import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from '@fastify/helmet';
import { ValidationPipe } from './Infrastructure/Middlewares/validationPipe';
import { AppModule } from './Infrastructure/Modules';

async function bootstrap() {
  try {
    const { PORT, HOST } = process.env;

    // console.log(PORT, HOST);

    // if (!PORT || !HOST) {
    //   throw new Error('Please provide PORT and HOST environment variables.');
    // }

    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({ logger: true }),
    );

    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    await app.register(helmet);
    await app.listen(PORT, HOST);
  } catch (error) {
    console.error('Error during application startup:', error);
    process.exit(1);
  }
}

bootstrap();

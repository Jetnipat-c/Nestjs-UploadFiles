import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { config } from './constants/config';
import * as helmet from 'helmet';
import * as passport from 'passport';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(passport.initialize());
  app.use(passport.session());
  app.setGlobalPrefix('/api');
  await app.enableCors();
  await app.use(helmet());
  await app.use(compression());

  app.useGlobalPipes(new ValidationPipe({
    transform: true, // เรียงข้อมูลตาม DTO
    disableErrorMessages: false, // ปิดแจ้ง error
    whitelist: true, // ตัดข้อมูลส่วนเกินที่ส่งมา
  }));

  const swagger = new DocumentBuilder()
    .setTitle('Stareal Estare')
    .setDescription('The Stareal API description by Jetnipat')
    .setVersion('0.0.1')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();

  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(config.port);
}
bootstrap();

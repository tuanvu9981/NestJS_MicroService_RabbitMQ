import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { OrdersModule } from './orders.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(OrdersModule);
  app.useGlobalPipes(new ValidationPipe());
  // The ValidationPipe provides a convenient approach to enforce validation rules 
  // for all incoming client payloads, where the specific rules are declared with 
  // simple annotations in local class/DTO declarations in each module.

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap();

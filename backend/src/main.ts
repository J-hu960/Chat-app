import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  app.setGlobalPrefix('api/v1/whatsclone')
  console.log('Listening to 5100 port')
  await app.listen(5100);
}
bootstrap();

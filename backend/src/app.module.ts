import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { Users } from './users/enities/users.entity';
import { Chat } from './chats/entitites/chats.entity';
import { Message } from './messages/entities/messages.enity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [ TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '21912191-Js',
      database: 'chatapp',
      entities: [Users,Chat,Message],
      synchronize: true,
    })
 
    ,
    AuthModule, ChatsModule, MessagesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/messages.enity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { ChatsModule } from 'src/chats/chats.module';

@Module({
  imports:[TypeOrmModule.forFeature([Message]),AuthModule,UsersModule,ChatsModule],
  providers: [MessagesGateway, MessagesService],
})
export class MessagesModule {}

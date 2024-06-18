import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entitites/chats.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports:[TypeOrmModule.forFeature([Chat]),AuthModule,UsersModule],
  controllers: [ChatsController],
  providers: [ChatsService],
  exports:[ChatsService]
})
export class ChatsModule {}

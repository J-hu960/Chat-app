import { Body, Controller, Get, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDTO } from './dto/create-chatDTO';
import { AuthGuard } from 'src/auth/auth.guard';
import { userInfo } from 'os';
import { Chat } from './entitites/chats.entity';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) { }
  
  @UseGuards(AuthGuard)
  @Post()
  createChatDTO(@Body() body:CreateChatDTO,@Req() req){
    return this.chatsService.createNewChat(body,req.user)
  }
  
  @UseGuards(AuthGuard)
  @Get()
  findUserChats(@Req() req){
    console.log(req.user)
    return this.chatsService.findUsersChats(req.user)
  }

  @UseGuards(AuthGuard)
  @Patch()
  async addUserToChat(@Req() req, @Body('secret') secret:string){
    await this.chatsService.addMember(req.user,secret)
  }

}

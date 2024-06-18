import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/messages.enity';
import { creatMessageDTO } from './dto/createMessageDTO';
import { UserService } from 'src/users/users.service';
import { ChatsService } from 'src/chats/chats.service';

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(Message)
        private messageRepository:Repository<Message>,
        private usersService:UserService,
        private chatsService:ChatsService
    ){}

    async createAndSaveMessage(content:string,roomId:number,userId:number){
        console.log(content)
        try {
            const message = new Message()
            message.content = content
            message.createdAt = new Date()
            message.sentBy = await this.usersService.findOne(userId)
            message.roomId = await this.chatsService.findOne(roomId)
            const savedMessage = await this.messageRepository.save(message)
            return savedMessage
            
        } catch (error) {
            console.log(error)
        }
    }
    async findAllMessages(roomId){
        const roomMessages = await this.messageRepository.createQueryBuilder('messages')
        .where('messages.roomIdId = :id',{id:roomId})
        .getMany()
        return roomMessages
    }
}

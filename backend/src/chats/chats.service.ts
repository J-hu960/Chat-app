import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entitites/chats.entity';
import { Repository } from 'typeorm';
import { CreateChatDTO } from './dto/create-chatDTO';
import { Users } from 'src/users/enities/users.entity';
import { NotFoundError, identity } from 'rxjs';

@Injectable()
export class ChatsService {
    constructor(
        @InjectRepository(Chat)
        private chatsRepository:Repository<Chat>
    ){}

    async createNewChat(newChat:CreateChatDTO,user:Users){
        const createdAt = new Date()
        console.log(user)
        try {
            const chat = new Chat()
             chat.createdAt = createdAt
             chat.secret = newChat.secret
             chat.title = newChat.title
            chat.createdBy = user
            chat.members = [user]
            await this.chatsRepository.save(chat)
    
            
        } catch (error) {
            console.log(error)
            
        }
      
        
    }

    async findUsersChats(user:Users){
        console.log(user)
         const chats = await  this.chatsRepository.createQueryBuilder('chat')
         .leftJoinAndSelect('chat.members','member')
         .where('member.Pk_User = :id',{id:user.Pk_User})
         .getMany()
         chats.map(chat=>chat.secret = undefined)
         return chats
    }

    findOne(id: number):Promise<Chat> {
        return this.chatsRepository.createQueryBuilder('chat')
        .select()
        .where('chat.id =:id',{id:id}).getOne();
      }
    async findBySecretKey(key:string):Promise<Chat>{
        return this.chatsRepository.createQueryBuilder('chat')
        .leftJoinAndSelect('chat.members','members')
        .where('chat.secret =:key',{key:key}).getOne();
    }

    async addMember(user:Users,secret:string){
        const existingChat:Chat= await this.findBySecretKey(secret)
        if(!existingChat){
            return new NotFoundException()
        }

        const isAlreadyMember = existingChat.members.some(member=>member.Pk_User === user.Pk_User)
        if(isAlreadyMember){
             return new UnauthorizedException()
        }

        existingChat.members.push(user)
        console.log(existingChat)
        await this.chatsRepository.save(existingChat)




        


     
    }
}

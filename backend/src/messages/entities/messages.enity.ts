import { Chat } from 'src/chats/entitites/chats.entity';
import { Users } from 'src/users/enities/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(()=>Users,(user)=>user.Pk_User) //Relation to user, many-to-one relation
  sentBy: Users; 

  @ManyToOne(()=>Chat,(chat)=>chat.id)
  roomId:Chat

   
  @Column()
  content:string;

  @Column()
  createdAt:Date


  


}
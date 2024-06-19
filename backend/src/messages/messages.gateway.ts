import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { creatMessageDTO } from './dto/createMessageDTO';
import { Socket } from 'socket.io';

@WebSocketGateway({namespace:'messageEvents',cors:{
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Authorization', 'Content-Type'],
  credentials: true
}})
export class MessagesGateway {
  constructor(
    private readonly messagesService: MessagesService
    
  ) {}
  
  @SubscribeMessage('newMessage')
  async handleNewMessage(@MessageBody() body:any, @ConnectedSocket() client:Socket){
    const {content,roomId,userId} = body.data
    
     const createdMessage = await this.messagesService.createAndSaveMessage(content,roomId,userId)
    client.emit('message-created',createdMessage) //    client.broadcast.to(roomId).emit('message-created',createdMessage) 
    console.log(`Message emmited to room ${roomId}`)
  }

  @SubscribeMessage('findAllMessages')
  async findAll(@MessageBody('roomId') roomId:number,@ConnectedSocket() client:Socket){
    const messages = await this.messagesService.findAllMessages(roomId)
    client.join(roomId.toString())
    return messages
  }
}

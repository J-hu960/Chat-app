import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import { Users } from 'src/users/enities/users.entity';
import { JwtService } from '@nestjs/jwt';




@Injectable()
export class AuthService {
    constructor(
        private userService:UserService,
        private jwtService:JwtService

    ){}
    async signIn(user:CreateUserDto){

        const userStored = await this.userService.findUserbyMail(user.Email)
        if(!userStored || !( await this.comparePasswords(user.Password,userStored.Password))){
            throw new UnauthorizedException()
         }

        const jwt = await this.createAccessToken(userStored.Email.toString())
         console.log(jwt)
        return jwt
     }

     async signUp(user:CreateUserDto){
        const userExist = await this.userService.findUserbyMail(user.Email)
  
        if(userExist){
          return 'User already exists!!'
        }
  
        const hashedPassword =  await bcrypt.hash(user.Password,10)

          await this.userService.createUser(user.Email,hashedPassword)
          const jwt = await this.createAccessToken(user.Email)
          return jwt
         
       }

       async createAccessToken(mail:string):Promise<string>{
        const payload = {mail:mail}
        const access_token:string = await this.jwtService.signAsync(payload)
        return  access_token
       }

       async comparePasswords(candidate:string,password:string):Promise<boolean>{
        return await bcrypt.compare(candidate,password)
       }

    
}

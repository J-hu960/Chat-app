import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './users.service';
import { Users } from './enities/users.entity';
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}


  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':mail')
  async findOne(@Param('mail') mail: string) {
   const user:Users=await  this.userService.findUserbyMail(mail);
   user.Password=undefined
   return user
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController{
    constructor(private readonly userService:UserService){}
    @Get()
    findAll(){
        return this.userService.findAll()
    }
    
    @Get(":userId")
    findOne(
        @Param("userId", ParseIntPipe) userId:number
    ){
        return this.userService.findOne(userId)
    }

    @Get(":userId/tasks")
    findUserTasks(
        @Param("userId", ParseIntPipe) userId:number
    ){
        return this.userService.findOne(userId)
    }

    @Post()
    addOne(
        @Body() user:any
    ){
        return this.userService.addOne(user)
    }

    @Put(":userId")
    updateOne(
        @Param("userId", ParseIntPipe) userId:number,
        @Body() userDto:any
    ){
        return this.userService.updateOne(userId, userDto)
    }

    @Delete(":userId")
    deleteOne(
        @Param("userId", ParseIntPipe) userId:number
    ){
        return this.userService.deleteOne(userId)
    }
}
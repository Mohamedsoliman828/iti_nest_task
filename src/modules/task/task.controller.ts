import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController{
    constructor(private readonly taskService:TaskService){}
    @Get()
    findAll(){
        return this.taskService.findAll()
    }
    
    @Get(":taskId")
    findOne(
        @Param("taskId", ParseIntPipe) taskId:number
    ){
        return this.taskService.findOne(taskId)
    }

    @Post()
    addOne(
        @Body() task:any
    ){
        return this.taskService.addOne(task)
    }

    @Put(":taskId")
    updateOne(
        @Param("taskId", ParseIntPipe) taskId:number,
        @Body() taskDto:any
    ){
        return this.taskService.updateOne(taskId, taskDto)
    }

    @Delete(":taskId")
    deleteOne(
        @Param("taskId", ParseIntPipe) taskId:number
    ){
        return this.taskService.deleteOne(taskId)
    }
}
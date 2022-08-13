import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { StatusService } from './status.service';

@Controller('status')
export class StatusController{
    constructor(private readonly statusService:StatusService){}
    @Get()
    findAll(){
        return this.statusService.findAll()
    }
    
    @Get(":statusId")
    findOne(
        @Param("statusId", ParseIntPipe) statusId:number
    ){
        return this.statusService.findOne(statusId)
    }
}
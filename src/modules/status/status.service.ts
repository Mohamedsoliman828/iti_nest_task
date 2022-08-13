import { HttpException, Injectable } from "@nestjs/common";

let status = [
    {
        id: 1,
        title: "Completed"
    },
    {
        id: 2,
        title: "Pending"
    }
]

@Injectable()
export class StatusService{
    findAll(){
        return status;
    }
    findOne(statusId:number){
        return status.filter(status=>status.id === statusId)
    }
    findTaskStatus(statusId:number){
        return status.filter(status=>status.id === statusId)
    }
}
import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { TaskService } from "../task/task.service";
//import * as data from '../../db/data.json';

let users = [
    {
        id: 1,
        username: "omar",
        password: "1234"
    },
    {
        id: 2,
        username: "ahmad",
        password: "4321"
    },
    {
        id: 3,
        username: "sara",
        password: "abc331"
    },
    {
        id: 4,
        username: "laila",
        password: "sc21"
    },
    {
        id: 5,
        username: "ayman",
        password: "xvewwf"
    }
]

@Injectable()
export class UserService{
    constructor(private readonly taskService:TaskService){}
    findAll(){
        return users;
    }
    findOne(userId:number){
        const user = users.filter(user => user.id === userId);
		if (!user) {
			throw new BadRequestException('user not found');
		}
		const tasks = this.taskService.findUserTasks(userId)
		return {
			user,
			tasks
		}
    }
    addOne(body:any){
        users.push(body)
        return users
    }
    updateOne(userId:number, userDto:any){
        users= users.map(user=> {
            if(user.id === userId){
                return {
                    ...user,
                    ...userDto
                }
            }
            return user
        })
        return users;
    }
    deleteOne(userId:number){
        const userInDatabase = users.find(user => user.id === userId)
		if (!userInDatabase) {
			throw new HttpException('User not found', 404)
		}
		users = users.filter(user => user.id !== userInDatabase.id);
		return users;
    }
}
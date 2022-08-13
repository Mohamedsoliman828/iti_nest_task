import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { StatusService } from "../status/status.service";

let tasks = [
    {
        id: 1,
        title: "Study",
        userId: 1,
        statusId: 2
    },
    {
        id: 2,
        title: "Play",
        userId: 5,
        statusId: 1
    },
    {
        id: 3,
        title: "Go out",
        userId: 1,
        statusId: 1
    },
    {
        id: 4,
        title: "Meet friends",
        userId: 1,
        statusId: 2
    },
    {
        id: 5,
        title: "Watch movies",
        userId: 3,
        statusId: 1
    },
    {
        id: 6,
        title: "Learn Nestjs",
        userId: 4,
        statusId: 1
    },
    {
        id: 7,
        title: "Learn React",
        userId: 1,
        statusId: 2
    },
    {
        id: 8,
        title: "Travel",
        userId: 1,
        statusId: 1
    },
    {
        id: 9,
        title: "Study",
        userId: 1,
        statusId: 2
    },
    {
        id: 10,
        title: "Travel",
        userId: 2,
        statusId: 1
    },
    {
        id: 11,
        title: "Make coffee",
        userId: 1,
        statusId: 1
    },
    {
        id: 12,
        title: "Play sports",
        userId: 4,
        statusId: 1
    },
    {
        id: 13,
        title: "Learn violin",
        userId: 3,
        statusId: 2
    },
    {
        id: 14,
        title: "Go to work",
        userId: 2,
        statusId: 2
    }
]

@Injectable()
export class TaskService{
    constructor(private readonly statusService:StatusService){}
    findAll(){
        return tasks;
    }
    findOne(taskId:number){
        const task = tasks.find(task => task.id === taskId);
		if (!task) {
			throw new BadRequestException('No task found');
		}
		const status = this.statusService.findTaskStatus(task.id)
		return {
			task,
			status
		}
    }
    addOne(body:any){
        tasks.push(body)
        return tasks
    }
    updateOne(taskId:number, taskDto:any){
        tasks= tasks.map(task=> {
            if(task.id === taskId){
                return {
                    ...task,
                    ...taskDto
                }
            }
            return task
        })
        return tasks;
    }
    deleteOne(taskId:number){
        const taskInDatabase = tasks.find(task => task.id === taskId)
		if (!taskInDatabase) {
			throw new HttpException('task not found', 404)
		}
		tasks = tasks.filter(task => task.id !== taskInDatabase.id);
		return tasks;
    }
    findUserTasks(userId:number){
        return tasks.filter(task => task.userId === userId)
    }
}
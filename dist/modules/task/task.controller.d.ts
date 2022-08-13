import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): {
        id: number;
        title: string;
        userId: number;
        statusId: number;
    }[];
    findOne(taskId: number): {
        task: {
            id: number;
            title: string;
            userId: number;
            statusId: number;
        };
        status: {
            id: number;
            title: string;
        }[];
    };
    addOne(task: any): {
        id: number;
        title: string;
        userId: number;
        statusId: number;
    }[];
    updateOne(taskId: number, taskDto: any): {
        id: number;
        title: string;
        userId: number;
        statusId: number;
    }[];
    deleteOne(taskId: number): {
        id: number;
        title: string;
        userId: number;
        statusId: number;
    }[];
}

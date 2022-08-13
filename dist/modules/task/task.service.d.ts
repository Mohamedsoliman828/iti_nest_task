import { StatusService } from "../status/status.service";
export declare class TaskService {
    private readonly statusService;
    constructor(statusService: StatusService);
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
    addOne(body: any): {
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
    findUserTasks(userId: number): {
        id: number;
        title: string;
        userId: number;
        statusId: number;
    }[];
}

import { TaskService } from "../task/task.service";
export declare class UserService {
    private readonly taskService;
    constructor(taskService: TaskService);
    findAll(): {
        id: number;
        username: string;
        password: string;
    }[];
    findOne(userId: number): {
        user: {
            id: number;
            username: string;
            password: string;
        }[];
        tasks: {
            id: number;
            title: string;
            userId: number;
            statusId: number;
        }[];
    };
    addOne(body: any): {
        id: number;
        username: string;
        password: string;
    }[];
    updateOne(userId: number, userDto: any): {
        id: number;
        username: string;
        password: string;
    }[];
    deleteOne(userId: number): {
        id: number;
        username: string;
        password: string;
    }[];
}

import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
    findUserTasks(userId: number): {
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
    addOne(user: any): {
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

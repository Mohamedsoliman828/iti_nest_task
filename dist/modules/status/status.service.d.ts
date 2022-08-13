export declare class StatusService {
    findAll(): {
        id: number;
        title: string;
    }[];
    findOne(statusId: number): {
        id: number;
        title: string;
    }[];
    findTaskStatus(statusId: number): {
        id: number;
        title: string;
    }[];
}

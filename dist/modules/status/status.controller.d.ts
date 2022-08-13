import { StatusService } from './status.service';
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    findAll(): {
        id: number;
        title: string;
    }[];
    findOne(statusId: number): {
        id: number;
        title: string;
    }[];
}

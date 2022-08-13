"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const status_service_1 = require("../status/status.service");
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
];
let TaskService = class TaskService {
    constructor(statusService) {
        this.statusService = statusService;
    }
    findAll() {
        return tasks;
    }
    findOne(taskId) {
        const task = tasks.find(task => task.id === taskId);
        if (!task) {
            throw new common_1.BadRequestException('No task found');
        }
        const status = this.statusService.findTaskStatus(task.id);
        return {
            task,
            status
        };
    }
    addOne(body) {
        tasks.push(body);
        return tasks;
    }
    updateOne(taskId, taskDto) {
        tasks = tasks.map(task => {
            if (task.id === taskId) {
                return Object.assign(Object.assign({}, task), taskDto);
            }
            return task;
        });
        return tasks;
    }
    deleteOne(taskId) {
        const taskInDatabase = tasks.find(task => task.id === taskId);
        if (!taskInDatabase) {
            throw new common_1.HttpException('task not found', 404);
        }
        tasks = tasks.filter(task => task.id !== taskInDatabase.id);
        return tasks;
    }
    findUserTasks(userId) {
        return tasks.filter(task => task.userId === userId);
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [status_service_1.StatusService])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map
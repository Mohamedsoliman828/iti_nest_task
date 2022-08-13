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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("../task/task.service");
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
];
let UserService = class UserService {
    constructor(taskService) {
        this.taskService = taskService;
    }
    findAll() {
        return users;
    }
    findOne(userId) {
        const user = users.filter(user => user.id === userId);
        if (!user) {
            throw new common_1.BadRequestException('user not found');
        }
        const tasks = this.taskService.findUserTasks(userId);
        return {
            user,
            tasks
        };
    }
    addOne(body) {
        users.push(body);
        return users;
    }
    updateOne(userId, userDto) {
        users = users.map(user => {
            if (user.id === userId) {
                return Object.assign(Object.assign({}, user), userDto);
            }
            return user;
        });
        return users;
    }
    deleteOne(userId) {
        const userInDatabase = users.find(user => user.id === userId);
        if (!userInDatabase) {
            throw new common_1.HttpException('User not found', 404);
        }
        users = users.filter(user => user.id !== userInDatabase.id);
        return users;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
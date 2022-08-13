"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusService = void 0;
const common_1 = require("@nestjs/common");
let status = [
    {
        id: 1,
        title: "Completed"
    },
    {
        id: 2,
        title: "Pending"
    }
];
let StatusService = class StatusService {
    findAll() {
        return status;
    }
    findOne(statusId) {
        return status.filter(status => status.id === statusId);
    }
    findTaskStatus(statusId) {
        return status.filter(status => status.id === statusId);
    }
};
StatusService = __decorate([
    (0, common_1.Injectable)()
], StatusService);
exports.StatusService = StatusService;
//# sourceMappingURL=status.service.js.map
import { Module } from "@nestjs/common";
import { StatusModule } from "../status/status.module";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";


@Module({
    imports:[StatusModule],
    controllers:[TaskController],
    providers:[TaskService],
    exports:[TaskService]
})

export class TaskModule{

}
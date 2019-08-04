import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './tasks.model';
import { CreateTaskDTO } from './dto/createTask.dto';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) { }

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return await this.taskService.getAllTasks();
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDTO): Promise<Task> {
    return await this.taskService.createTask(createTaskDto);
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return await this.taskService.getTaskById(id);
  }

  @Delete(':id')
  async deleteTaskById(@Param('id') id: string): Promise<void> {
    return await this.taskService.deleteTaskById(id);
  }
}

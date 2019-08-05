import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDTO } from './dto/createTask.dto';
import { GetTasksFilterDto } from './dto/getTasksFilter.dto';
import { TaskStatusValidationPipe } from './pipes/taskStatusValidation.pipe';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) { }

  @Get()
  async getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Promise<Task[]> {

    if (Object.keys(filterDto).length > 0) {
      return await this.taskService.getTasksWithFilters(filterDto);
    }

    return await this.taskService.getAllTasks();
  }

  @Post()
  @UsePipes(ValidationPipe)
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

  @Patch(':id/status')
  async updateTaskStatus(@Body('status', TaskStatusValidationPipe) status: TaskStatus, @Param('id') id: string): Promise<Task> {
    return await this.taskService.updateTaskStatus(id, status);
  }
}

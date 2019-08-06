import { Controller, Get, Post, Body, Param, Delete, Patch, Query, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { TasksService } from './tasks.service';
import { TaskStatus } from './taskStatus.enum';
import { CreateTaskDTO } from './dto/createTask.dto';
import { GetTasksFilterDto } from './dto/getTasksFilter.dto';
import { Task } from './task.entity';
import { DeleteResult } from 'typeorm';
import { TaskStatusValidationPipe } from './pipes/taskStatusValidation.pipe';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private taskService: TasksService) { }

  @Get()
  async GetTasksFilterDto(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Promise<Task[]> {
    return await this.taskService.getTasks(filterDto);
  }

  @Post()
  async createTask(@Body(ValidationPipe) createTaskDto: CreateTaskDTO): Promise<Task> {
    return await this.taskService.createTask(createTaskDto);
  }

  @Get(':id')
  async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return await this.taskService.getTaskById(id);
  }

  @Delete(':id')
  async deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return await this.taskService.deleteTaskById(id);
  }

  @Patch(':id/status')
  async updateTaskStatus(@Body('status', TaskStatusValidationPipe) status: TaskStatus, @Param('id', ParseIntPipe) id: number): Promise<Task> {
    return await this.taskService.updateTaskStatus(id, status);
  }
}

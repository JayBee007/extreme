import { Controller, Get, Post, Body, Param, Delete, Patch, Query, ParseIntPipe, ValidationPipe, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { TasksService } from './tasks.service';
import { TaskStatus } from './taskStatus.enum';
import { CreateTaskDTO } from './dto/createTask.dto';
import { GetTasksFilterDto } from './dto/getTasksFilter.dto';
import { Task } from './task.entity';
import { User } from '../auth/user.entity';
import { DeleteResult } from 'typeorm';
import { TaskStatusValidationPipe } from './pipes/taskStatusValidation.pipe';
import { GetUser } from '../auth/getUser.decorator';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private taskService: TasksService) { }

  @Get()
  async GetTasksFilterDto(
    @Query(ValidationPipe) filterDto: GetTasksFilterDto,
    @GetUser() user: User,
  ): Promise<Task[]> {
    return await this.taskService.getTasks(filterDto, user);
  }

  @Post()
  async createTask(
    @Body(ValidationPipe) createTaskDto: CreateTaskDTO,
    @GetUser() user: User)
    : Promise<Task> {
    return await this.taskService.createTask(createTaskDto, user);
  }

  @Get(':id')
  async getTaskById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Task> {
    return await this.taskService.getTaskById(id, user);
  }

  @Delete(':id')
  async deleteTaskById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<DeleteResult> {
    return await this.taskService.deleteTaskById(id, user);
  }

  @Patch(':id/status')
  async updateTaskStatus(
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Task> {
    return await this.taskService.updateTaskStatus(id, status, user);
  }
}

import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid/v1';

import { Task } from '../../dist/tasks/tasks.model';
import { TaskStatus } from './tasks.model';
import { CreateTaskDTO } from './dto/createTask.dto';

@Injectable()
export class TasksService {
  tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(createTaskDto: CreateTaskDTO): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

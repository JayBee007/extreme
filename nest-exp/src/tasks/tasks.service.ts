import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid/v1';

import { Task } from '../../dist/tasks/tasks.model';
import { TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    }

    this.tasks.push(task);
    return task;
  }
}

import { EntityRepository, Repository } from 'typeorm';

import { Task } from './task.entity';
import { CreateTaskDTO } from './dto/createTask.dto';
import { TaskStatus } from './taskStatus.enum';
import { GetTasksFilterDto } from './dto/getTasksFilter.dto';
import { User } from 'src/auth/user.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

  async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    query.where('(task.userId = :userId)', { userId: user.id });

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere('(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))', { search: `%${search}%` });
    }

    const tasks = await query.getMany();
    return tasks;
  }

  async createTask(createTaskDto: CreateTaskDTO, user: User): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = new Task();
    task.status = TaskStatus.OPEN;
    task.title = title;
    task.description = description;
    task.user = user;

    await task.save();
    delete task.user;
    return task;
  }
}

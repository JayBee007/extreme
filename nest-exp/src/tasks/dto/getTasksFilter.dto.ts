import { TaskStatus } from '../tasks.model';
import { IsOptional, IsIn, IsNotEmpty, MinLength } from 'class-validator';

export class GetTasksFilterDto {

  @IsOptional()
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN])
  status: TaskStatus;

  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  search: string;
}

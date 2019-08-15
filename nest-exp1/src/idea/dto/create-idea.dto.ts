import { IsNotEmpty } from 'class-validator';
export class CreateIdeaDTO {

  @IsNotEmpty()
  idea: string;

  @IsNotEmpty()
  description: string;
}

import { IsString, IsNumber } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  priority: number;
}

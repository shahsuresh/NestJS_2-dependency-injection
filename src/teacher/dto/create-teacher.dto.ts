/* eslint-disable prettier/prettier */
import { IsInt, IsString } from 'class-validator';
export class CreateTeacherDto {
  @IsString()
  name: string;
  @IsString()
  dept: string;
  @IsInt()
  salary: number;
}

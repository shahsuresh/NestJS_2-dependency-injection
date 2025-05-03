/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Teacher } from './interfaces/teacher.interface';
import { CreateTeacherDto } from './dto/create-teacher.dto';

@Injectable()
export class TeacherService {
  private teachers: Teacher[] = [];

  getAllTeachersData(): Teacher[] {
    return this.teachers;
  }
  addTeacher(createTeacherDto: CreateTeacherDto): Teacher {
    const newTeacher: Teacher = {
      id: Date.now(),
      ...createTeacherDto,
    };
    this.teachers.push(newTeacher);
    return newTeacher;
  }
}

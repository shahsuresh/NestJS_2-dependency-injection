/* eslint-disable prettier/prettier */
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { TeacherService } from './teacher.service';
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Get()
  getAllTeachersList() {
    return this.teacherService.getAllTeachersData();
  }
  @Post()
  addTeacher(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.addTeacher(createTeacherDto);
  }
}

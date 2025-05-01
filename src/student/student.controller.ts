/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  //# call get all student data service
  @Get()
  getAllStudentsData() {
    return this.studentService.getAllStudentsData();
  }

  //# call get student data by id service
  @Get(':id')
  findStudentByID(@Param('id') id: string) {
    return this.studentService.getStudentByID(+id);
  }

  //# call add new student data service
  @Post()

  // get new student data from req body
  addStudentData(@Body() newData: { id: number; name: string; age: number }) {
    return this.studentService.addStudentData(newData);
  }

  //# call update student data by id service
  @Put(':id')
  updateStudentByid(
    @Param('id') id: string,
    @Body() updatedData: { id: number; name: string; age: number },
  ) {
    return this.studentService.updateStudentByID(+id, updatedData);
  }

  //# call update student data partially service
  @Patch(':id')
  patchStudentByid(
    @Param('id') id: string,
    @Body() updatedData: Partial<{ id: number; name: string; age: number }>,
  ) {
    return this.studentService.patchStudentData(+id, updatedData);
  }

  //# call Delete student data by id service

  @Delete(':id')
  deleteStudentData(@Param('id') id: string) {
    return this.studentService.deleteStudentByID(Number(id));
  }
}

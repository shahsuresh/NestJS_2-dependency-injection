/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Suresh', age: 28 },
    { id: 2, name: 'Ajit', age: 35 },
    { id: 3, name: 'Rakesh', age: 27 },
    { id: 4, name: 'Dinesh', age: 19 },
  ];
  //to get all students data(GET)

  getAllStudentsData() {
    return this.students;
  }
  //get student by id(GET)

  getStudentByID(id: number) {
    const requiredStudent = this.students.find((student) => student.id == id);
    if (!requiredStudent) {
      throw new NotFoundException('Not students with this id !!');
    }
    return requiredStudent;
  }

  // add student data (POST)

  addStudentData(data: { id: number; name: string; age: number }) {
    const newStudent = { ...data };
    this.students.push(newStudent);
    return newStudent;
  }

  // update student by ID (PUT)
  updateStudentByID(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((student) => student.id == id);
    if (index === -1) {
      throw new NotFoundException('Not students with this id !!');
    }
    this.students[index] = { id, ...data };
    return this.students[index];
  }

  // PATCH- partial update of student data

  patchStudentData(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentByID(id);
    Object.assign(student, data);
    return student;
  }

  // delete student data by id (DELETE)
  deleteStudentByID(id: number) {
    const index = this.students.findIndex((student) => student.id == id);
    if (index === -1) {
      throw new NotFoundException('Not students with this id !!');
    }
    const deletedStudentData = this.students.splice(index, 1);
    return { message: 'Student Data Deleted', student: deletedStudentData };
  }
}

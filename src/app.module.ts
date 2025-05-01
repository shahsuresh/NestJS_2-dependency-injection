/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatagoryModule } from './catagory/catagory.module';
import { StudentModule } from './student/student.module';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [CatagoryModule, StudentModule, TeacherModule], // CatagoryModule automatically imported by nestjs if new module is created
  controllers: [AppController, TeacherController],
  providers: [AppService],
})
export class AppModule {}

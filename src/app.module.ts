/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatagoryModule } from './catagory/catagory.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [CatagoryModule, StudentModule], // CatagoryModule automatically imported by nestjs if new module is created
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

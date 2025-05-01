/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { CatagoryService } from './catagory.service';

@Controller('catagory')
export class CatagoryController {
  constructor(private readonly getCategoryList: CatagoryService) {}
  @Get()
  getAllCategory() {
    return this.getCategoryList.categoryList();
  }
}

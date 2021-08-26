import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { Data } from '@nx-angular-data/api-interfaces';
import { DatasService } from './datas.service';
import { CreateDataDto } from './dto/create-data.dto';
import { UpdateDataDto } from './dto/update-data.dto';

@Controller('datas')
export class DatasController {
  constructor(private readonly datasService: DatasService) {}

  @Post()
  create(@Body() data: Data) {
    return this.datasService.create(data);
  }

  @Get()
  findAll() {
    return this.datasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Data) {
    return this.datasService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datasService.remove(id);
  }
}

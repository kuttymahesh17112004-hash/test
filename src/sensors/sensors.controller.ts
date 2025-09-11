import { Controller, Get, Post, Body } from '@nestjs/common';
import { SensorsService } from './sensors.service';

@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Post()
  handleSensorData(@Body() data: any) {
    return this.sensorsService.handleSensorData(data);
  }

  @Get()
  findAll() {
    return this.sensorsService.findAll();
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeocoderService } from './geocoder.service';
import { CreateGeocoderDto } from './dto/create-geocoder.dto';
import { UpdateGeocoderDto } from './dto/update-geocoder.dto';

@Controller('geocoder')
export class GeocoderController {
  constructor(private readonly geocoderService: GeocoderService) {}

  @Post()
  create(@Body() createGeocoderDto: CreateGeocoderDto) {
    return this.geocoderService.create(createGeocoderDto);
  }

  @Get()
  findAll() {
    return this.geocoderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.geocoderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeocoderDto: UpdateGeocoderDto) {
    return this.geocoderService.update(+id, updateGeocoderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.geocoderService.remove(+id);
  }
}

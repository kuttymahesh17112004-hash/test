import { Injectable } from '@nestjs/common';
import { CreateGeocoderDto } from './dto/create-geocoder.dto';
import { UpdateGeocoderDto } from './dto/update-geocoder.dto';

@Injectable()
export class GeocoderService {
  create(createGeocoderDto: CreateGeocoderDto) {
    return 'This action adds a new geocoder';
  }

  findAll() {
    return `This action returns all geocoder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} geocoder`;
  }

  update(id: number, updateGeocoderDto: UpdateGeocoderDto) {
    return `This action updates a #${id} geocoder`;
  }

  remove(id: number) {
    return `This action removes a #${id} geocoder`;
  }
}

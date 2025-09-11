import { PartialType } from '@nestjs/swagger';
import { CreateGeocoderDto } from './create-geocoder.dto';

export class UpdateGeocoderDto extends PartialType(CreateGeocoderDto) {}

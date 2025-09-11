import { Module } from '@nestjs/common';
import { GeocoderService } from './geocoder.service';
import { GeocoderController } from './geocoder.controller';

@Module({
  controllers: [GeocoderController],
  providers: [GeocoderService],
})
export class GeocoderModule {}

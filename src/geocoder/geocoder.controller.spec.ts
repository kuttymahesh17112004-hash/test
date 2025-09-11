import { Test, TestingModule } from '@nestjs/testing';
import { GeocoderController } from './geocoder.controller';
import { GeocoderService } from './geocoder.service';

describe('GeocoderController', () => {
  let controller: GeocoderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeocoderController],
      providers: [GeocoderService],
    }).compile();

    controller = module.get<GeocoderController>(GeocoderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

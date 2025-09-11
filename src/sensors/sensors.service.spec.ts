import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';

@Injectable()
export class SensorsService {
  private sensors: CreateSensorDto[] = [];

  // move handleSensorData logic to service
  handleSensorData(data: any): CreateSensorDto {
    const value = data.payload[0].values;
    const tim = data.payload[0].time;
    const ns = BigInt(tim);
    const ms = Number(ns / 1000000n);
    const timestamp = new Date(ms).toISOString();

    const sensor: CreateSensorDto = {
      deviceId: data.deviceId,
      latitude: value.latitude,
      longitude: value.longitude,
      speed: value.speed,
      timestamp: timestamp,
    };

    this.sensors.push(sensor);
    return sensor;
  }

  findAll(): CreateSensorDto[] {
    return this.sensors;
  }
}

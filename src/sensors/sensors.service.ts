import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';

@Injectable()
export class SensorsService {
  private sensorReadings: CreateSensorDto[] = [];

  handleSensorData(data: any): CreateSensorDto {
    //Data couldn't receive properly
    if (!data?.deviceId || !data?.payload || !Array.isArray(data.payload)) {
      throw new Error('Invalid sensor data');
    }

    const value = data.payload[0].values; // values in payload data (json)
    const time = data.payload[0].time; // values in payload data (json)

    const ns = BigInt(time); // convert time in nano sec
    const ms = Number(ns / 1000000n); // convert time in milli sec
    const ISOtime = new Date(ms).toISOString(); // convert time into ISO time

    //split last 12 digit of device id
    const deviceIdlast = data.deviceId.split('-')[4];

    //create obj of create sensor dto
    const sensor: CreateSensorDto = {
      DeviceMessageID: data.messageId,
      DeviceSerialNumber: data.deviceId,
      MessageTime: ISOtime,
      DeviceId: deviceIdlast,
      Latitude: value.latitude,
      Longitude: value.longitude,
      Address: 'Null',
      Altitude: value.altitude,
      speed: parseFloat((value.speed * 3.6).toFixed(3)),
      GeoFenceId: 0,
      GeoFenceName: 'Null',
    };

    this.sensorReadings.push(sensor);

    console.log('Received Sensor Data:', sensor);

    return sensor;
  }

  findAll(): CreateSensorDto[] {
    return this.sensorReadings;
  }

  findByDevice(DeviceId: string): CreateSensorDto[] {
    return this.sensorReadings.filter((s) => s.DeviceId === DeviceId);
  }
}

import { Controller, Post, Body, Headers } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Post()
  handleSensorData(@Body() data: any) {
    const value = data.payload[0].values;
    const tim = data.payload[0].time;
    // console.log('📥 Received sensor data:', data);
    console.log(
      'timestamp',
      tim,
      '\nLocation co-ordinates \n',
      'Longitude: ',
      value.longitude,
      'Latitude : ',
      value.latitude,
    );
    return {
      message: '✅ Data received successfully',
      received: data,
    };
  }
}

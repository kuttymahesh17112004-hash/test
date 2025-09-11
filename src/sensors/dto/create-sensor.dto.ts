export class CreateSensorDto {
  DeviceMessageID: number;
  DeviceSerialNumber: string;
  MessageTime: string;
  DeviceId: string;
  Latitude: number;
  Longitude: number;
  Address: string;
  Altitude: number;
  speed: number;
  GeoFenceId: number;
  GeoFenceName: string;
}

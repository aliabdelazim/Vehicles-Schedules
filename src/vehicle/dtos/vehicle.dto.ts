import { IsString, IsArray, ArrayNotEmpty, IsEnum, IsDate } from 'class-validator';
import { ScheduleEntity } from '../entities/schedule.entity';

export class CreateVehicleDto {
  @IsString()
  type: string;

  @IsString()
  category: string;

  @IsArray()
  @ArrayNotEmpty()
  schedules: ScheduleEntity[];
}


export class GetVehicleDto {
  @IsString()
  id: number;
}

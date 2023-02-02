import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehicleController } from './vehicle.controller';
import { VehicleEntity } from './entities/vehicle.entity';
import { ScheduleEntity } from './entities/schedule.entity';
import { VehicleService } from './vehicle.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


@Module({
  imports: [TypeOrmModule.forFeature([VehicleEntity, ScheduleEntity])],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehiclesModule {
}

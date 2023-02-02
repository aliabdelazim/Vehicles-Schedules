import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VehicleEntity } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dtos/vehicle.dto';


@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly vehicleRepository: Repository<VehicleEntity>,
  ) {}

  async create(createVehicleDto: CreateVehicleDto): Promise<VehicleEntity> {
    const vehicle = new VehicleEntity();
    vehicle.type = createVehicleDto.type;
    vehicle.category = createVehicleDto.category;
    vehicle.schedules = createVehicleDto.schedules;
    return await this.vehicleRepository.save(vehicle);
  }

  async findAll(): Promise<VehicleEntity[]> {
    return await this.vehicleRepository.find();
  }

  async findOne(id: number): Promise<VehicleEntity> {
    return await this.vehicleRepository.findOne(id);
  }
}


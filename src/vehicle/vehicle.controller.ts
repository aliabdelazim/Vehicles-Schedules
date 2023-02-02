import { Controller, Post, Body, Get, Param, UseInterceptors, Inject } from '@nestjs/common';
import { CreateVehicleDto, GetVehicleDto } from './dtos/vehicle.dto';
import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  @Inject(VehicleService)
  private readonly vehiclesService: VehicleService;

  @Post()
  async create(@Body() createVehicleDto: CreateVehicleDto) {
    return await this.vehiclesService.create(createVehicleDto);
  }

  @Get('')
  async getAll() {
    return await this.vehiclesService.findAll();
  }

  @Get(':id')
  async getOne(@Param() getVehicleDto: GetVehicleDto) {
    return await this.vehiclesService.findOne(getVehicleDto.id);
  }
}
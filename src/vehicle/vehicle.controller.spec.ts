import { Test, TestingModule } from '@nestjs/testing';
import { VehicleController } from './vehicle.controller';
import { VehicleService } from './vehicle.service';

describe('VehicleController', () => {
  let vehicleController: VehicleController;
  let vehicleService: VehicleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleController],
      providers: [VehicleService],
    }).compile();

    vehicleController = module.get<VehicleController>(VehicleController);
    vehicleService = module.get<VehicleService>(VehicleService);
  });

  describe('create', () => {
    it('should create a new vehicle type', async () => {
      const createVehicleDto = { name: 'one', type: 'type' ,category: 'SUV',schedules: [] };
      const vehicle = { id: 1, name: 'one', type: 'type', category: 'SUV', schedules: [] };

      jest.spyOn(vehicleService, 'create').mockResolvedValue(vehicle);

      expect(await vehicleController.create(createVehicleDto)).toEqual(vehicle);
    });
  });
});
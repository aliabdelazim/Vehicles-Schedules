import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { VehicleEntity } from './vehicle.entity';
@Entity()
export class ScheduleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dayOfWeek: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string;

  @Column()
  route: string;

  @Column()
  timings: string;

  @ManyToOne(() => VehicleEntity, vehicle => vehicle.schedules)
  vehicle: VehicleEntity;
}
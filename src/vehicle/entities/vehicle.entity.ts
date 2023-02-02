import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ScheduleEntity } from './schedule.entity';

@Entity()
export class VehicleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  category: string;

  @OneToMany(() => ScheduleEntity, schedule => schedule.vehicle)
  schedules: ScheduleEntity[];
}
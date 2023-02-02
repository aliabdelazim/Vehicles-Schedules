import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiclesModule } from './vehicle/vehicle.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    VehiclesModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

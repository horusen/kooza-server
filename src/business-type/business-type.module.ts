import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BusinessTypeService } from './business-type.service';
import { BusinessTypeController } from './business-type.controller';
import { BusinessType } from './entities/business-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BusinessType])],
  controllers: [BusinessTypeController],
  providers: [BusinessTypeService],
})
export class BusinessTypeModule {}

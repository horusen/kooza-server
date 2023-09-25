import { PaymentMethodType } from './entities/payment_method_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PaymentMethodTypeService } from './payment_method_type.service';
import { PaymentMethodTypeController } from './payment_method_type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethodType])],
  controllers: [PaymentMethodTypeController],
  providers: [PaymentMethodTypeService],
})
export class PaymentMethodTypeModule {}

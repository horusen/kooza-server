import { PaymentMethod } from './entities/payment_method.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { PaymentMethodController } from './payment_method.controller';
import { PaymentMethodBusinessService } from './payment_method_business.service';
import { PaymentMethodBusiness } from './entities/payment_method_business.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentMethod, PaymentMethodBusiness])],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService, PaymentMethodBusinessService],
  exports: [PaymentMethodService],
})
export class PaymentMethodModule {}

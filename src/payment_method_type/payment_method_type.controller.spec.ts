import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMethodTypeController } from './payment_method_type.controller';
import { PaymentMethodTypeService } from './payment_method_type.service';

describe('PaymentMethodTypeController', () => {
  let controller: PaymentMethodTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentMethodTypeController],
      providers: [PaymentMethodTypeService],
    }).compile();

    controller = module.get<PaymentMethodTypeController>(PaymentMethodTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

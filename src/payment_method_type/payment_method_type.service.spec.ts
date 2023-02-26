import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMethodTypeService } from './payment_method_type.service';

describe('PaymentMethodTypeService', () => {
  let service: PaymentMethodTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentMethodTypeService],
    }).compile();

    service = module.get<PaymentMethodTypeService>(PaymentMethodTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

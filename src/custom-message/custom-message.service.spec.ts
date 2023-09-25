import { Test, TestingModule } from '@nestjs/testing';
import { CustomMessageService } from './custom-message.service';

describe('CustomMessageService', () => {
  let service: CustomMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomMessageService],
    }).compile();

    service = module.get<CustomMessageService>(CustomMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

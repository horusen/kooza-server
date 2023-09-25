import { Test, TestingModule } from '@nestjs/testing';
import { CustomMessageController } from './custom-message.controller';
import { CustomMessageService } from './custom-message.service';

describe('CustomMessageController', () => {
  let controller: CustomMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomMessageController],
      providers: [CustomMessageService],
    }).compile();

    controller = module.get<CustomMessageController>(CustomMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

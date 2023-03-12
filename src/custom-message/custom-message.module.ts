import { CustomMessage } from './entities/custom-message.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CustomMessageService } from './custom-message.service';
import { CustomMessageController } from './custom-message.controller';

@Module({
  controllers: [CustomMessageController],
  providers: [CustomMessageService],
  imports: [TypeOrmModule.forFeature([CustomMessage])],
  exports: [CustomMessageService],
})
export class CustomMessageModule {}

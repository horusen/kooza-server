import { InjectRepository } from '@nestjs/typeorm';
import { CustomMessage } from './entities/custom-message.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class CustomMessageService extends BaseService<CustomMessage> {
  constructor(
    @InjectRepository(CustomMessage) public repo: Repository<CustomMessage>,
  ) {
    super(repo);
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateBusinessTypeDto } from './dto/create-business-type.dto';
import { UpdateBusinessTypeDto } from './dto/update-business-type.dto';
import { BusinessType } from './entities/business-type.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'src/shared/services/base.service';

@Injectable()
export class BusinessTypeService extends BaseService<BusinessType> {
  constructor(
    @InjectRepository(BusinessType) public repo: Repository<BusinessType>,
  ) {
    super(repo);
  }
}

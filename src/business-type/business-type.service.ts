import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateBusinessTypeDto } from './dto/create-business-type.dto';
import { UpdateBusinessTypeDto } from './dto/update-business-type.dto';
import { BusinessType } from './entities/business-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessTypeService {
  constructor(
    @InjectRepository(BusinessType) public repo: Repository<BusinessType>,
  ) {}

  create(createBusinessTypeDto: CreateBusinessTypeDto) {
    return this.repo.save(createBusinessTypeDto);
  }

  findAll() {
    return `This action returns all businessType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} businessType`;
  }

  update(id: number, updateBusinessTypeDto: UpdateBusinessTypeDto) {
    return `This action updates a #${id} businessType`;
  }

  remove(id: number) {
    return `This action removes a #${id} businessType`;
  }
}

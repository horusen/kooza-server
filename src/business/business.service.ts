import { BaseService } from './../shared/services/base.service';
import { Business } from './entities/business.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessService extends BaseService<Business> {
  constructor(@InjectRepository(Business) public repo: Repository<Business>) {
    super(repo);
  }

  // async findOne(id: any) {
  //   return await this.repo.findOneBy({ id });
  //   // return await this.repo.findOne({ where: { id } });
  // }
}

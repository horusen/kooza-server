import { Customer } from './entities/customer.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService extends BaseService<Customer> {
  constructor(
    @InjectRepository(Customer)
    public repo: Repository<Customer>,
  ) {
    super(repo);
  }

  async findOneByPhoneNumber(phone_number: any) {
    return await this.repo.findOneBy({ phone_number });
  }

  async getByBusinessId(business_id: string) {
    return await this.repo.find({ where: { business_id } });
  }
}

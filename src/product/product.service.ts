import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/shared/services/base.service';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(
    @InjectRepository(Product)
    public repo: Repository<Product>,
  ) {
    super(repo);
  }

  async getByBusinessId(business_id: string) {
    return await this.repo.find({ where: { business_id } });
  }
}

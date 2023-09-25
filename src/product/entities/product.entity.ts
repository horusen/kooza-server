import { Business } from './../../business/entities/business.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @Column()
  business_id: string;

  @Column()
  name: string;

  @Column()
  unit_price: string;

  @ManyToOne(() => Business, (business: Business) => business.id)
  business: Business;
}

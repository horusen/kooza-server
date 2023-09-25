import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class PaymentMethodType extends BaseEntity {
  @Column()
  name: string;
}

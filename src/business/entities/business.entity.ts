import { PaymentMethod } from './../../payment_method/entities/payment_method.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';

import {
  Column,
  Entity,
  JoinTable,
  JoinTableOptions,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { BusinessType } from 'src/business-type/entities/business-type.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Business extends BaseEntity {
  @Column()
  business_type_id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true, unique: true })
  email_address: string;

  @Column({ unique: true })
  identifier: string;

  @Column()
  @Exclude()
  password: string;

  @ManyToOne((type) => BusinessType, (business_type) => business_type.id, {
    eager: true,
  })
  business_type: BusinessType;

  @ManyToMany(() => PaymentMethod, { eager: true, nullable: true })
  @JoinTable({
    joinColumn: 'business_id',
    inverseJoinColumn: 'payment_method_id',
    name: 'payment_method_business',
    synchronize: false,
  } as JoinTableOptions)
  payment_methods: PaymentMethod[];
}

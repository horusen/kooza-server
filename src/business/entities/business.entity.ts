import { PaymentMethod } from './../../payment_method/entities/payment_method.entity';
import { BaseEntity } from 'src/shared/entities/base.entity';

import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  JoinTableOptions,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { BusinessType } from 'src/business-type/entities/business-type.entity';

@Entity()
export class Business extends BaseEntity {
  @JoinColumn({ name: 'business_type_id' })
  @ManyToOne(() => BusinessType, (business_type) => business_type.id, {
    nullable: false,
    eager: true,
  })
  businessType: BusinessType;

  @Column()
  name: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true, unique: true })
  emailAddress: string;

  @Column({ unique: true })
  identifier: string;

  @Column()
  password: string;

  @ManyToMany(() => PaymentMethod)
  @JoinTable({
    joinColumn: 'business_id',
    inverseJoinColumn: 'payment_method_id',
    name: 'payment_method_business',
  } as JoinTableOptions)
  paymentMethods: PaymentMethod[];
}

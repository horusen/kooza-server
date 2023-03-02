import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class Customer extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'phone_number', unique: true, nullable: true })
  phone_number: string;

  @Column({ name: 'email_address', unique: true, nullable: true })
  email_address: string;

  @Column({ unique: true, nullable: true })
  nin: string;
}

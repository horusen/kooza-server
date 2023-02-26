import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class Customer extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'phone_number', unique: true })
  phoneNumber: string;

  @Column({ name: 'email_address', unique: true })
  emailAddress: string;

  @Column({ unique: true })
  nin: string;
}

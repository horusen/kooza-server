import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/shared/entities/base.entity';

@Entity()
export class BusinessType extends BaseEntity {
  @Column()
  name: string;
}

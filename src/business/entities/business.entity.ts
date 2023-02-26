import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  business_type_id: number;

  @Column()
  location: string;

  @Column()
  email_address: string;

  @Column()
  identifier: string;

  @Column()
  password: string;
}

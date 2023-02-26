import { EntityTimestamp } from './timestamp.entity';
import { TimestampColumn } from 'src/shared/decorators/timestamped-column';
import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @TimestampColumn()
  timesptamps: EntityTimestamp;
}

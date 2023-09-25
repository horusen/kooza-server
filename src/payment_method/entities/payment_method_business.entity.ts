import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class PaymentMethodBusiness {
  @PrimaryColumn()
  payment_method_id: string;

  @PrimaryColumn()
  business_id: string;
}

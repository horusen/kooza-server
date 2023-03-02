import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessModule } from './business/business.module';
import { BusinessTypeModule } from './business-type/business-type.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';

import { CustomerModule } from './customer/customer.module';
import { ReminderModule } from './reminder/reminder.module';
import { PaymentMethodTypeModule } from './payment_method_type/payment_method_type.module';
import { CreditLoanModule } from './credit-loan/credit-loan.module';
import { CreditLoanStatusModule } from './credit-loan-status/credit-loan-status.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: process.env.PGHOST || configService.get('database.host'),
        port: +process.env.PGPORT || +configService.get('database.port'),
        username: process.env.PGUSER || configService.get('database.username'),
        password:
          process.env.PGPASSWORD || configService.get('database.password'),
        database:
          process.env.PGDATABASE || configService.get('database.database'),
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
        namingStrategy: new SnakeNamingStrategy(),
      }),
      inject: [ConfigService],
    }),

    BusinessModule,

    BusinessTypeModule,

    PaymentMethodModule,

    CustomerModule,

    ReminderModule,

    PaymentMethodTypeModule,

    CreditLoanModule,

    CreditLoanStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

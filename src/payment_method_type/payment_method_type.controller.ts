import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentMethodTypeService } from './payment_method_type.service';
import { CreatePaymentMethodTypeDto } from './dto/create-payment_method_type.dto';
import { UpdatePaymentMethodTypeDto } from './dto/update-payment_method_type.dto';

@Controller('payment-method-type')
export class PaymentMethodTypeController {
  constructor(private readonly paymentMethodTypeService: PaymentMethodTypeService) {}

  @Post()
  create(@Body() createPaymentMethodTypeDto: CreatePaymentMethodTypeDto) {
    return this.paymentMethodTypeService.create(createPaymentMethodTypeDto);
  }

  @Get()
  findAll() {
    return this.paymentMethodTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentMethodTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentMethodTypeDto: UpdatePaymentMethodTypeDto) {
    return this.paymentMethodTypeService.update(+id, updatePaymentMethodTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentMethodTypeService.remove(+id);
  }
}

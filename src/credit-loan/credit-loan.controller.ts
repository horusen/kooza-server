import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreditLoanService } from './credit-loan.service';
import { CreateCreditLoanDto } from './dto/create-credit-loan.dto';
import { UpdateCreditLoanDto } from './dto/update-credit-loan.dto';

@Controller('credit-loan')
export class CreditLoanController {
  constructor(private readonly creditLoanService: CreditLoanService) {}

  @Post()
  create(@Body() createCreditLoanDto: CreateCreditLoanDto) {
    return this.creditLoanService.create(createCreditLoanDto);
  }

  @Get()
  findAll() {
    return this.creditLoanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditLoanService.findOne(id);
  }

  @Post('mark-as-paid')
  markAsPaid(@Body() elements: { credit_loan_id: string }) {
    return this.creditLoanService.markAsPaid(elements.credit_loan_id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCreditLoanDto: UpdateCreditLoanDto,
  ) {
    return this.creditLoanService.update(id, updateCreditLoanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditLoanService.remove(id);
  }

  @Get(':id/reminder')
  getReminders(@Param('id') id: string) {
    return this.creditLoanService.findReminders(id);
  }
}

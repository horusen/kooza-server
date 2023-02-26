import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreditLoanStatusService } from './credit-loan-status.service';
import { CreateCreditLoanStatusDto } from './dto/create-credit-loan-status.dto';
import { UpdateCreditLoanStatusDto } from './dto/update-credit-loan-status.dto';

@Controller('credit-loan-status')
export class CreditLoanStatusController {
  constructor(private readonly creditLoanStatusService: CreditLoanStatusService) {}

  @Post()
  create(@Body() createCreditLoanStatusDto: CreateCreditLoanStatusDto) {
    return this.creditLoanStatusService.create(createCreditLoanStatusDto);
  }

  @Get()
  findAll() {
    return this.creditLoanStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.creditLoanStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCreditLoanStatusDto: UpdateCreditLoanStatusDto) {
    return this.creditLoanStatusService.update(+id, updateCreditLoanStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditLoanStatusService.remove(+id);
  }
}

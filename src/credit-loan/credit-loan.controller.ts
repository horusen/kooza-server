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
}

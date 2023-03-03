import { CreditLoanStatusService } from './../credit-loan-status/credit-loan-status.service';
import { CustomerService } from './../customer/customer.service';
import { BaseService } from 'src/shared/services/base.service';
import { CreditLoan } from './entities/credit-loan.entity';
import { Injectable } from '@nestjs/common';
import { CreateCreditLoanDto } from './dto/create-credit-loan.dto';
import { UpdateCreditLoanDto } from './dto/update-credit-loan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CreditLoanService extends BaseService<CreditLoan> {
  constructor(
    @InjectRepository(CreditLoan)
    public repo: Repository<CreditLoan>,
    public customerService: CustomerService,
    public creditLoanStatusService: CreditLoanStatusService,
  ) {
    super(repo);
  }

  findAll() {
    return this.repo.find({
      order: { credit_loan_status_id: 'DESC', due_date: 'ASC' },
    });
  }

  async create(createDTO: any) {
    const customerData = createDTO.customer;
    let customer = await this.customerService.findOneByPhoneNumber(
      customerData.phone_number,
    );

    if (!customer) {
      customer = await this.customerService.create(customerData);
    }

    const creditLoanStatusID = (
      await this.creditLoanStatusService.findOne({ name: 'Unpaid' })
    ).id;

    console.log(creditLoanStatusID);

    const creditLoan = new CreditLoan();
    creditLoan.amount = createDTO.amount;
    creditLoan.business_id = createDTO.business_id;
    creditLoan.description = createDTO.description;
    creditLoan.due_date = createDTO.due_date;
    creditLoan.credit_loan_status_id = creditLoanStatusID;
    creditLoan.customer_id = customer.id;

    const savedCredit = await this.repo.save(creditLoan);
    return this.findOne(savedCredit.id);
  }

  // TODO: Enable users to edit
}

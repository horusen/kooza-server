import { CreditLoanStatusService } from './../credit-loan-status/credit-loan-status.service';
import { CustomerService } from './../customer/customer.service';
import { BaseService } from 'src/shared/services/base.service';
import { CreditLoan } from './entities/credit-loan.entity';
import { Injectable } from '@nestjs/common';
import { CreateCreditLoanDto } from './dto/create-credit-loan.dto';
import { UpdateCreditLoanDto } from './dto/update-credit-loan.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException } from '@nestjs/common';

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

  async markAsPaid(id: string) {
    const item = await this.findOne(id);
    console.log(item);

    if (!item) throw new HttpException('Credit not found', 404);

    const paidStatus = await this.creditLoanStatusService.findOne({
      name: 'Paid',
    });

    if (!paidStatus) throw new HttpException('Credit status not found', 404);

    item.credit_loan_status_id = paidStatus.id;
    this.repo.save(item);

    item.credit_loan_status = paidStatus;

    return item;
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

  async findReminders(id: string) {
    const element = await this.repo.findOne({
      where: { id },
      relations: { reminders: true },
    });
    return element.reminders;
  }

  // TODO: Enable users to edit
}

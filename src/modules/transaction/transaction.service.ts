import { query } from 'express';
import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { TransactionDto } from './dto/transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @Inject('TransactionRepository')
    private readonly transactionRepository: typeof Transaction,
  ) {}

  async create(transactionDto: TransactionDto) {
    return await this.transactionRepository.create(transactionDto);
  }
}

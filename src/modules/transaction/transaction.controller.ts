import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDto } from './dto/transaction.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { query } from 'express';
import { QueryTransaction } from './dto/query-transaction.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@ApiTags('transactions')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

}

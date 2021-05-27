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

  @Post('add')
  @UseInterceptors(AnyFilesInterceptor())
  create(@Body() transactionDto: TransactionDto, @UploadedFiles() files: Array<Express.Multer.File>) {
    //console.log(files);
    transactionDto.main_img = files[0].originalname
    let temp = files.filter((f)=> f.fieldname == "gallary")
    let queryTemp: Array<string> = []
    let query = temp.forEach((item,index,rows)=>{
      queryTemp.push(item.originalname)
    })
    console.log(transactionDto.main_img = files[0].originalname);
    console.log("queryTemp : ",queryTemp);
    transactionDto.gallary = (JSON.stringify(queryTemp))
    console.log(transactionDto);
    return this.transactionService.create(transactionDto);
  }
  
}

import { Transaction } from "./entities/transaction.entity";

export const TransactionProvider = [
    {
        provide: 'TransactionRepository',
        useValue: Transaction
    }
]
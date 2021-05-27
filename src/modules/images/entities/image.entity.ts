import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Transaction } from 'src/modules/transaction/entities/transaction.entity';

@Table({
  tableName: 'images',
  timestamps: false,
  paranoid: false,
  comment: 'Images Home Condo...',
})
export class Images extends Model<Images> {
  haskey = (key) => {
    return key in this;
  };

  @PrimaryKey
  @AutoIncrement
  @Column
  img_id: number;

  @AllowNull(false)
  @Column
  fieldname: string;

  @AllowNull(false)
  @Column
  originalname: string;

  @AllowNull(false)
  @Column
  path: string;

  // belongTo 1 to mayny
 
  @ForeignKey(() => Transaction)
  @Column
  tracSac_id: number;

  @BelongsTo(() => Transaction)
  transaction: Transaction
}


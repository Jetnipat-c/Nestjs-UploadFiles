import { AllowNull, AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Images } from "src/modules/images/entities/image.entity";

@Table({
    tableName: 'transactions',
    timestamps: false,
    paranoid: false,
    comment: 'Detail Home Condo...'
})
export class Transaction extends Model<Transaction>{
    haskey = (key) => {
        return key in this;
      };

    @PrimaryKey
    @AutoIncrement
    @Column
    tracSacid: number

    @AllowNull(false)
    @Column
    title: string;

    @AllowNull(false)
    @Column
    detail: string;

    @AllowNull(false)
    @Column
    price: number;

    // บ้านเดี่ยว บ้านแฝด
    @AllowNull(false)
    @Column
    type: string;

    @AllowNull(false)
    @Column
    bedroom: number;

    @AllowNull(false)
    @Column
    toilet: number;

    @AllowNull(false)
    @Column
    parking: number;

    @AllowNull(false)
    @Column
    pool: number;

    @AllowNull(false)
    @Column
    conditioners: number;

    @AllowNull(false)
    @Column
    security: string;

    // 
    @AllowNull(false)
    @Column
    location: string;

    @AllowNull(false)
    @Column
    province: string

    // has Many 1 to mayny

    @HasMany(() => Images)
    images: Images[];
}

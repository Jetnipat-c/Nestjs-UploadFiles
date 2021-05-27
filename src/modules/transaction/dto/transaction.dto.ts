import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
export class TransactionDto {
    @IsNotEmpty()
    @ApiProperty()
    title: string;

    @IsNotEmpty()
    @ApiProperty()
    detail: string;

    @IsNotEmpty()
    @ApiProperty()
    price: number;

    @IsNotEmpty()
    @ApiProperty()
    type: string;

    @IsNotEmpty()
    @ApiProperty()
    bedroom: number;

    @IsNotEmpty()
    @ApiProperty()
    toilet: number;

    @IsNotEmpty()
    @ApiProperty()
    parking: number;

    @IsNotEmpty()
    @ApiProperty()
    pool: number;

    @IsNotEmpty()
    @ApiProperty()
    conditioners: number;

    @IsNotEmpty()
    @ApiProperty()
    security: string;

    @IsNotEmpty()
    @ApiProperty()
    location: string;

    @IsNotEmpty()
    @ApiProperty()
    area: string;

    @IsNotEmpty()
    @ApiProperty()
    province: string;

//     @IsNotEmpty()
//     @ApiProperty()
//     images: string;
}

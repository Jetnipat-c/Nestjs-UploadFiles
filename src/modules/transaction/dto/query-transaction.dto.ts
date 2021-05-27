import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class QueryTransaction {
  @ApiPropertyOptional({ name: 'ค้นหาข้อมูล' })
  search: string;

  @ApiPropertyOptional({ name: 'ขายหรือเช่า' })
  selected: string;

  @ApiPropertyOptional({ name: 'บ้านเดี่ยวหรือบ้านแฝด' })
  type: string;

  @ApiPropertyOptional({ name: 'ราคาต่ำสุด' })
  priceMin: string;

  @ApiPropertyOptional({ name: 'ราคาสูงสุด' })
  priceMax: string;
}

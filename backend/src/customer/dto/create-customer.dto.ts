import { IsNotEmpty, IsString } from 'class-validator';
import { SaleEntity } from 'sale/sale.entity';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty({ message: 'Customer name is required' })
  name: string;

  @IsString()
  phone: string;

  @IsString()
  @IsNotEmpty({ message: 'Customer address is required' })
  address: string;

  @IsString()
  purchases: SaleEntity[];
}



import {
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsPositive,
  IsString,
} from 'class-validator';
import { CustomerEntity } from 'customer/customer.entity';
import { ProductEntity } from 'product/product.entity';

export class CreateSaleDto {
  @IsString()
  @IsNotEmpty({ message: 'Customer is required' })
  customer: CustomerEntity;

  @IsString()
  @IsNotEmpty({ message: 'At least one Product is required' })
  products: ProductEntity[];

  @IsBoolean()
  @IsNotEmpty({ message: 'Paid Status is required' })
  isPaid: boolean;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty({ message: 'Product price is required' })
  total: number;
}

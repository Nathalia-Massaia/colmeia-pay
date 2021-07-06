import { CategoryEntity } from 'category/category.entity';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'Product name is required' })
  name: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty({ message: 'Product price is required' })
  price: number;

  @IsNotEmpty({ message: 'Product category is required' })
  category: CategoryEntity;
}

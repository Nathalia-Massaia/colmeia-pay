import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateSaleDto } from './create-sale.dto';

export class UpdateSaleDto extends PartialType(CreateSaleDto) {
  @IsString()
  id?: string;
}

import { UpdateSaleDto } from './dto/update-sale.dto';
import { CreateSaleDto } from './dto/create-sale.dto';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get()
  async findAll() {
    return await this.saleService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.saleService.findById(id);
  }

  @Post()
  async create(@Body('sale') data: CreateSaleDto) {
    return this.saleService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body('sale') data: UpdateSaleDto) {
    return this.saleService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.saleService.delete(id);
    return {
      message: `Sale ${id} deleted successfully`,
      status: 200,
    };
  }
}

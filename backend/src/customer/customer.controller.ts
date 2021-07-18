import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll() {
    return await this.customerService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.customerService.findById(id);
  }

  @Post()
  async create(@Body('customer') data: CreateCustomerDto) {
    return this.customerService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body('customer') data: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.customerService.delete(id);
    return {
      message: `Customer ${id} deleted successfully`,
      status: 200,
    };
  }
}

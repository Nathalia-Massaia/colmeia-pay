import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Post()
  async create(@Body('product') data: CreateProductDto) {
    return this.productService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body('product') data: UpdateProductDto,
  ) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.productService.delete(id);
    return {
      message: `Product ${id} deleted successfully`,
      status: 200
    };
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.categoryService.findById(id);
  }

  @Post()
  async create(@Body('category') data: CreateCategoryDto) {
    return this.categoryService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body('category') data: UpdateCategoryDto,
  ) {
    return this.categoryService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.categoryService.delete(id);
    return {
      message: `Category ${id} deleted successfully`,
      status: 200,
    };
  }
}

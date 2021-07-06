import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CreateCategoryDto, UpdateCategoryDto } from './dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findAll(): Promise<{ total: number; data: CategoryEntity[] }> {
    try {
      const allCategories = await this.categoryRepository.find();

      return { total: allCategories.length, data: allCategories };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findById(id: string): Promise<CategoryEntity> {
    try {
      const category = await this.categoryRepository.findOne(id, {
        relations: ['products'],
      });

      if (!category) {
        throw new InternalServerErrorException('Category not found');
      }

      return category;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async create(data: CreateCategoryDto): Promise<CategoryEntity> {
    try {
      const category = await this.categoryRepository.findOne({
        name: data.name.toLowerCase(),
      });

      if (category) {
        throw new InternalServerErrorException('Category already registered');
      }

      const newCategory = new CategoryEntity();
      newCategory.name = data.name.toLowerCase();

      const errors = await validate(newCategory);
      if (errors.length > 0) {
        throw new HttpException(
          { message: 'Invalid fields on Category creation', errors },
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.categoryRepository.save(newCategory);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, data: UpdateCategoryDto): Promise<CategoryEntity> {
    try {
      const category = await this.findById(id);

      if (!category) {
        throw new InternalServerErrorException('Category not found');
      }

      const hasAvailableName = await this.categoryRepository.findOne({
        name: data.name.toLowerCase(),
      });

      if (hasAvailableName) {
        throw new InternalServerErrorException('This Name is not available');
      }

      category.name = data.name.toLowerCase();

      const errors = await validate(category);
      if (errors.length > 0) {
        throw new HttpException(
          { message: 'Invalid fields on Category creation', errors },
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const category = await this.findById(id);

      if (!category) {
        throw new InternalServerErrorException('Category not found');
      }

      await this.categoryRepository.delete(category);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

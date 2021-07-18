import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(): Promise<{ total: number; data: ProductEntity[] }> {
    try {
      const allProducts = await this.productRepository.find({
        relations: ['category'],
      });

      return { total: allProducts.length, data: allProducts };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findById(id: string): Promise<ProductEntity> {
    try {
      const product = await this.productRepository.findOne(id, {
        relations: ['category'],
      });

      if (!product) {
        throw new InternalServerErrorException('Product not found');
      }

      return product;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async create(data: CreateProductDto): Promise<ProductEntity> {
    try {
      const product = await this.productRepository.findOne({
        name: data.name.toLowerCase(),
      });

      if (product) {
        throw new InternalServerErrorException('Product already registered');
      }

      const newProduct = new ProductEntity();
      newProduct.name = data.name.toLowerCase();
      newProduct.price = data.price;
      newProduct.category = data.category;

      const errors = await validate(newProduct);
      if (errors.length > 0) {
        throw new HttpException(
          { message: 'Invalid fields on Product creation', errors },
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.productRepository.save(newProduct);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, data: UpdateProductDto): Promise<ProductEntity> {
    try {
      const product = await this.findById(id);

      if (!product) {
        throw new InternalServerErrorException('Product not found');
      }

      if (data.name) {
        const hasAvailableName = await this.productRepository.findOne({
          name: data.name.toLowerCase(),
        });

        if (hasAvailableName) {
          throw new InternalServerErrorException('This Name is not available');
        }
      }

      product.name = data.name && data.name.toLowerCase();
      product.price = data.price;
      product.category = data.category;

      const errors = await validate(product);
      if (errors.length > 0) {
        throw new HttpException(
          { message: 'Invalid fields on Product creation', errors },
          HttpStatus.BAD_REQUEST,
        );
      }

      await this.productRepository.save(product);

      return this.findById(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const product = await this.productRepository.findOne(id);

      if (!product) {
        throw new InternalServerErrorException('Product not found');
      }

      await this.productRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

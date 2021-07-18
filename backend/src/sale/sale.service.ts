import { UpdateSaleDto } from './dto/update-sale.dto';
import { validate } from 'class-validator';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSaleDto } from './dto';
import { SaleEntity } from './sale.entity';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(SaleEntity)
    private readonly saleRepository: Repository<SaleEntity>,
  ) {}

  async findAll(): Promise<{ total: number; data: SaleEntity[] }> {
    try {
      const allSales = await this.saleRepository.find();

      return { total: allSales.length, data: allSales };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findById(id: string): Promise<SaleEntity> {
    try {
      const sale = await this.saleRepository.findOne(id, {
        relations: ['products', 'customer'],
      });

      if (!sale) {
        throw new InternalServerErrorException('Sale not found');
      }

      delete sale.customer.purchases;

      return sale;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async create(data: CreateSaleDto): Promise<SaleEntity> {
    try {
      const newSale = new SaleEntity();
      newSale.customer = data.customer;
      newSale.products = data.products;
      newSale.isPaid = data.isPaid;
      newSale.total = data.total;

      const errors = await validate(newSale);
      if (errors.length > 0) {
        throw new InternalServerErrorException(
          'Invalid fields on Sale creation',
        );
      }

      return await this.saleRepository.save(newSale);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, data: UpdateSaleDto): Promise<SaleEntity> {
    try {
      const sale = await this.findById(id);

      if (!sale) {
        throw new InternalServerErrorException('Sale not found');
      }

      sale.customer = data.customer;
      sale.products = data.products;
      sale.total = data.total;

      if (sale.total === 0) {
        sale.isPaid = true;
      }

      const errors = await validate(sale);
      if (errors.length > 0) {
        throw new InternalServerErrorException('Invalid fields on Sale update');
      }

      await this.saleRepository.save(sale);

      return this.findById(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const sale = await this.saleRepository.findOne(id);

      if (!sale) {
        throw new InternalServerErrorException('Sale not found');
      }

      await this.saleRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

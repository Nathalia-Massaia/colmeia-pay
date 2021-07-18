import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { validate } from 'class-validator';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from './dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async findAll(): Promise<{ total: number; data: CustomerEntity[] }> {
    try {
      const allCustomers = await this.customerRepository.find();

      allCustomers.forEach((customer) => delete customer.purchases);

      return { total: allCustomers.length, data: allCustomers };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findById(id: string): Promise<CustomerEntity> {
    try {
      const customer = await this.customerRepository.findOne(id, {
        relations: ['purchases'],
      });

      if (!customer) {
        throw new InternalServerErrorException('Customer not found');
      }

      return customer;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async create(data: CreateCustomerDto): Promise<CustomerEntity> {
    try {
      const customer = await this.customerRepository.findOne({
        name: data.name.toLowerCase(),
      });

      if (customer) {
        throw new InternalServerErrorException('Customer already registered');
      }

      const newCustomer = new CustomerEntity();
      newCustomer.name = data.name.toLowerCase();
      newCustomer.phone = data.phone;
      newCustomer.address = data.address;
      newCustomer.purchases = data.purchases;

      const errors = await validate(newCustomer);
      if (errors.length > 0) {
        throw new HttpException(
          { message: 'Invalid fields on Customer creation', errors },
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.customerRepository.save(newCustomer);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: string, data: UpdateCustomerDto): Promise<CustomerEntity> {
    try {
      const customer = await this.findById(id);

      if (!customer) {
        throw new InternalServerErrorException('Customer not found');
      }

      if (data.name) {
        const hasAvailableName = await this.customerRepository.findOne({
          name: data.name.toLowerCase(),
        });

        if (hasAvailableName) {
          throw new InternalServerErrorException('This Name is not available');
        }
      }

      customer.name = data.name && data.name.toLowerCase();
      customer.phone = data.phone;
      customer.address = data.address;
      customer.purchases = data.purchases;

      const errors = await validate(customer);
      if (errors.length > 0) {
        throw new HttpException(
          { message: 'Invalid fields on customer creation', errors },
          HttpStatus.BAD_REQUEST,
        );
      }

      return await this.customerRepository.save(customer);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const customer = await this.customerRepository.findOne(id);

      if (!customer) {
        throw new InternalServerErrorException('Customer not found');
      }

      await this.customerRepository.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { SaleModule } from './sale/sale.module';

import { ProductController } from 'product/product.controller';
import { CategoryController } from 'category/category.controller';
import { SaleController } from 'sale/sale.controller';
import { CustomerController } from 'customer/customer.controller';

const controllers = [
  ProductController,
  CategoryController,
  CustomerController,
  SaleController,
];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './config/.env',
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      keepConnectionAlive: true,
    }),

    ProductModule,
    CategoryModule,
    CustomerModule,
    SaleModule,
  ],
  controllers: controllers,
})
export class AppModule {}

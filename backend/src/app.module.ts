import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CustomerModule } from './customer/customer.module';
import { SalesModule } from './sales/sales.module';

import { ProductController } from 'product/product.controller';
import { CategoryController } from 'category/category.controller';
import { CustomerController } from 'customer/customer.controller';
import { SalesController } from 'sales/sales.controller';

const controllers = [
  ProductController,
  CategoryController,
  CustomerController,
  SalesController,
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
    SalesModule,
  ],
  controllers: controllers
})
export class AppModule {}

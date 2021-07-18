import { ProductEntity } from 'product/product.entity';
import { CustomerEntity } from 'customer/customer.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
  JoinColumn,
} from 'typeorm';

@Entity('sale')
export class SaleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => CustomerEntity, (customer) => customer.purchases)
  @JoinColumn()
  customer: CustomerEntity;

  @ManyToMany((type) => ProductEntity)
  @JoinTable()
  products: ProductEntity[];

  @Column({ default: false })
  isPaid: boolean;

  @Column({ default: 0 })
  total: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}

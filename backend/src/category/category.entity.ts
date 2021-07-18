import { ProductEntity } from 'product/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinTable } from 'typeorm';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany((type) => ProductEntity, (products) => products.category)
  @JoinTable()
  products: ProductEntity[];
}

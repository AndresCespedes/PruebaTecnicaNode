import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ProductPurchase } from "./ProductPurchase.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  productName!: string;

  @Column()
  category!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;

  @Column("int")
  quantity!: number;

  @ManyToMany(() => ProductPurchase, (purchase) => purchase.products)
  @JoinTable()
  purchases!: ProductPurchase[];
}

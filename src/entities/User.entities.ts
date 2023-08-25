import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductPurchase } from "./ProductPurchase.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  money!: number;

  @OneToMany(() => ProductPurchase, (purchase) => purchase.user)
  purchases!: ProductPurchase[];
}

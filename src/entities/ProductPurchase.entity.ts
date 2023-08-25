import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product.entities";
import { User } from "./User.entities";

@Entity()
export class ProductPurchase {
  // Este decorador sirve para marcar una propiedad como llave primaria de la entidad y genera automáticamente un valor autoincremental y único
  @PrimaryGeneratedColumn()
  id!: number;

  //Es la relación muchos a muchos en la base de datos
  @ManyToMany(() => Product)
  @JoinTable()
  products!: Product[];

  //Establece automáticamente la fecha de compra cuandon se inserte una nueva fila en la tabla.
  @CreateDateColumn()
  purchasDate!: Date;

  @Column("decimal", { precision: 10, scale: 2 })
  total!: number;

  //Es la relación muchos a uno en la base de datos
  @ManyToOne(() => User, (user) => user.purchases)
  @JoinColumn({ name: "userId" }) // Nombre de la columna en la tabla de ProductPurchase}
  user!: User;
}

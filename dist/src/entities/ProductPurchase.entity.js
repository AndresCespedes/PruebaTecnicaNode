var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";
import { Product } from "./Product.entities";
import { User } from "./User.entities";
let ProductPurchase = class ProductPurchase {
    // Este decorador sirve para marcar una propiedad como llave primaria de la entidad y genera automáticamente un valor autoincremental y único
    id;
    //Es la relación muchos a muchos en la base de datos
    products;
    //Establece automáticamente la fecha de compra cuandon se inserte una nueva fila en la tabla.
    purchasDate;
    total;
    //Es la relación muchos a uno en la base de datos
    user;
};
__decorate([
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ProductPurchase.prototype, "id", void 0);
__decorate([
    ManyToMany(() => Product),
    JoinTable(),
    __metadata("design:type", Array)
], ProductPurchase.prototype, "products", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", Date)
], ProductPurchase.prototype, "purchasDate", void 0);
__decorate([
    Column("decimal", { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], ProductPurchase.prototype, "total", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.purchases),
    JoinColumn({ name: "userId" }) // Nombre de la columna en la tabla de ProductPurchase}
    ,
    __metadata("design:type", User)
], ProductPurchase.prototype, "user", void 0);
ProductPurchase = __decorate([
    Entity()
], ProductPurchase);
export { ProductPurchase };

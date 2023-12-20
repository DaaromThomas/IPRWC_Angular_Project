import { Product } from "./Product";

export class Order{
    constructor(
        id: number,
        name: string,
        customer: string,
        products: Product[]
    ){}
}
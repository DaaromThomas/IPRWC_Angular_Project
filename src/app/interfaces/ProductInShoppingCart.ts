import { Product } from "./Product";

export class ProductInShoppingCart{
    constructor(
        public product: Product,
        public quantity: number
    ){        

    }
}
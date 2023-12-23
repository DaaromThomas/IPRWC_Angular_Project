import { Product } from "./Product";
import { ProductInShoppingCart } from "./ProductInShoppingCart";

export class Order{
    constructor(
        private id: string,
        private name: string,
        private customer: string,
        public products: ProductInShoppingCart[]
    ){}

}
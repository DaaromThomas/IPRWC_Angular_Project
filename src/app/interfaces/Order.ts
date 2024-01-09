import { ProductInShoppingCart } from "./ProductInShoppingCart";

export class Order {
    constructor(
        public id: string,
        public name: string,
        public customer: string,
        public products: ProductInShoppingCart[],

        public customerName: String,
        public email: String,
        public address: String
    ) {}
}

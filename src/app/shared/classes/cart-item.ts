import {CalculatorProduct, StoreProduct} from './Product';

// cart items
export interface CartItem {
    product: CalculatorProduct;
    quantity: number;
    store?: StoreProduct;
}

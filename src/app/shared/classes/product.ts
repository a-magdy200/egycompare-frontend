import {BaseCategory} from './category';

export interface StoreProduct {
  id: number;
  name: string;
  logo: string;
  price: number;
  offer: string;
  warranty: string;
  stock: string;
  state: string;
  colors?: ProductColor[];
}
export interface ProductFilter {
  name: string;
  value: string;
}
// Color Filter
export const ColorsFilter = ['white' , 'black' , 'red' , 'green' , 'purple' , 'yellow' , 'blue' , 'gray' , 'orange' , 'pink'];
export type ProductColor = 'white' |  'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

export interface ProductVariant {
  color: string;
  image: string;
}
export interface Product extends BaseProduct {
  parent_categories: BaseCategory[];
  short_description: string;
  long_description: string;
  stores: StoreProduct[];
}
export interface CalculatorProduct extends BaseProduct {
  store ?: StoreProduct;
}
export interface BaseProduct {
  id: number;
  name: string;
  slug: string;
  pictures: string[];
  minimumPrice: number;
  maximumPrice: number;
  variants: ProductVariant[];
  colors?: ProductColor[];
  rate: number;
  number_of_reviews: number;
  filter_options: ProductFilter[];
  brand: string;
  category: string;
}

import {Product} from './product';
import {BaseCategory, CategoryFilters, ProductCategory} from './category';
import {Brand} from './brand';

export interface ProductsResponse {
  products: Product[];
  categories: ProductCategory[];
  parent_categories: BaseCategory[];
  brands: Brand[];
  categoryFilters: CategoryFilters[];
}

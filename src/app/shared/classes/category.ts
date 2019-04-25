import {Brand} from './brand';

export interface Category {
  id: number;
  name: string;
  picture: string;
  brands: Brand[];
  filters: CategoryFilters[];
  subcategories: Category[];
}
export interface CategoryFilters {
  name: string;
  values: string[];
}
export interface BaseCategory {
  id: number;
  name: string;
  slug: string;
}
export interface HeaderCategories extends BaseCategory {
  sub_categories?: BaseCategory[];
  image: string;
}
export interface ProductCategory extends BaseCategory {
  has_sub: boolean;
}

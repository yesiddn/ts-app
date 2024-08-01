import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export type Sizes = 'small' | 'medium' | 'large';
export interface Product extends BaseModel {
  title: string;
  stock: number;
  sizes?: Sizes;
  // es recomendable usar otro modelo para las estructura anidadas
  // category: {
  //   id: string | number;
  //   name: string;
  // }
  category: Category;
}

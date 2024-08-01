import { Category } from '../categories/category.model';

export type Sizes = 'small' | 'medium' | 'large';
export interface Product {
  id: string;
  title: string;
  createdAt: Date;
  stock: number;
  sizes?: Sizes;
  // es recomendable usar otro modelo para las estructura anidadas
  // category: {
  //   id: string | number;
  //   name: string;
  // }
  category: Category;
}

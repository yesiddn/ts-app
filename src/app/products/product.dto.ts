import { Product } from "./product.model";

// con Omit se usa una interfaz para crear un objeto exceptuando las propiedades que se le pasan
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// pick es lo contrario de omit, por lo que queda un nuevo tipo con los datos que se seleccionaron
// type example = Pick<Product, 'title' | 'description'>

import { Product } from "./product.model";

// con Omit se usa una interfaz para crear un objeto exceptuando las propiedades que se le pasan
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

// pick es lo contrario de omit, por lo que queda un nuevo tipo con los datos que se seleccionaron
// type example = Pick<Product, 'title' | 'description'>

export interface UpdateProductDto extends Partial<CreateProductDto> { } // de esta forma  Partial pone como opcionales todos los atributos y se excluyen los que se omitieron en CreateProductDto -> example: title?: string

// required es el contrario de partial, por lo que regresa un nuevo tipo pero con todos los atributos obligatorios
type example2 = Required<CreateProductDto>

export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>; // de esta forma impedimos en todos los niveles poder mutar un array
} // asi se pueden unir tos utility types para que solo se puedan leer los atributos y además sean oppcionales

import { faker } from "@faker-js/faker";
import { CreateProductDto, FindProductDto, UpdateProductDto } from "./product.dto";
import { Product } from "./product.model";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    }
  };

  products.push(newProduct);

  return newProduct;
}

// de esta forma estamos accediendo al tipado de un atributo y en caso de que cambiemos el tipo en la interfaz no se va a romper todo el proyecto. En algunos casos casos si hay que arreglarlo manuealmente como en la funcion addproduct cuando crea un nuevo producto con un id tipo string, pero en general evita una gran cantidad de errores
export const updateProduct = (id: Product['id'], changes: UpdateProductDto): Product => {
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  };

  return products[index];
}

export const findProducts = (dto: FindProductDto): Product[] => {
  return products;
}

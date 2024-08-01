import { faker } from "@faker-js/faker";
import { CreateProductDto } from "./product.dto";
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

export const updateProduct = (id: string, changes: Product) => {
  // ...
}

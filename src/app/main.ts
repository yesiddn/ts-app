import { faker } from '@faker-js/faker';
import { addProduct, products } from "./products/product.service";

for (let i = 0; i < 10; i++) {
  addProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    stock: faker.number.int({
      min: 10,
      max: 100
    }),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([]),
    size: faker.helpers.arrayElement(['small', 'medium', 'large'])
  });
}

console.log(products);

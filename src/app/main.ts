import { faker } from '@faker-js/faker';
import { addProduct, findProducts, products, updateProduct } from "./products/product.service";

for (let i = 0; i < 10; i++) {
  const product = addProduct({
    title: faker.commerce.productName(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({
      min: 10,
      max: 100
    }),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price()),
    categoryId: faker.string.uuid(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElements([]),
    size: faker.helpers.arrayElement(['small', 'medium', 'large'])
  });

  console.log(product);
}

const product = products[0];
updateProduct(product.id, {
  title: faker.commerce.productName(),
  stock: faker.number.int({
      min: 10,
      max: 100
    }),
});

findProducts({
  stock: 10,
  color: 'red',
  tags: ['1', '2', '3']
});

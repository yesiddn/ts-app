export const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew: boolean = true, // default params
) => {
  return {
    id,
    stock,
    isNew,
  };
}

const p1 = createProduct('1', 20, true);
const p2 = createProduct(2, 0);
const p3 = createProduct('3');
const p4 = createProduct('4', 0, false);
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

export const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew?: boolean,
) => {
  return {
    id,
    // stock: stock || 0,
    stock,
    isNew: isNew || true,
    // isNew: isNew ?? true,
  };
}

// el operador || puede producir comportamientos extraños porque:
// 0 === false
// '' === false
// false === false

// esto se puede solucionar con el operador Nullish-coalescing (??) que valida si es null o undefined

const p1 = createProduct('1', 20, true);
const p2 = createProduct(2, 0);
const p3 = createProduct('3');
const p4 = createProduct('4', 0, false); // { id: '4', stock: 0, isNew: true }
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

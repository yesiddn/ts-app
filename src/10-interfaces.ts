type Sizes = 'small' | 'medium' | 'large';
// a los types no se pueden extender
// type Product = {
//   id: string;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   sizes?: Sizes;
// }

// las interfaces y los tipos son muy similares, pero la diferencia esta en que a la interfaz hay que enviarle un objeto, mientras que el tipo puede ser cualquier tipo de dato (como Sizes que se define en una linea)
interface Product  {
  id: string;
  title: string;
  createdAt: Date;
  stock: number;
  sizes?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'Camiseta',
  createdAt: new Date(),
  stock: 10,
  sizes: 'medium'
});

products.push({
  id: '2',
  title: 'Jean',
  createdAt: new Date(),
  stock: 5,
});

const addProduct = (data: Product) => {
  products.push(data);
}

const shirt = new Clothing({
  brand: 'Nike',
  typeFabric: ['alpaca', 'acrílica', 'encaje'],
  price: 35000,
  quantity: 7,
  colors: ['blanco', 'negro', 'rosa'],
});

console.log(
  'El precio total de la compra de las camisas es: ' + shirt.getPrice()
);
console.log('La telas de las camisas son: ' + shirt.getTypeFabric());
console.log('Los colores de las camisas son: ' + shirt.getColor());

const trouser = new Clothing({
  brand: 'Re/Done',
  typeFabric: ['seda', 'jean'],
  price: 80000,
  quantity: 4,
  colors: ['azul', 'negro', 'gris'],
});

console.log(
  'El precio total de la compra de los pantalones es: ' + trouser.getPrice()
);
console.log('La telas de los pantalones son: ' + trouser.getTypeFabric());
console.log('Los colores de los pantalones son: ' + trouser.getColor());

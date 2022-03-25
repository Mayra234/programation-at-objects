const banana = new Fruit({
  name: 'banano',
  quantity: 15,
  price: 700,
  description: 'Banano: fruta amarilla de forma alargada, rica en potasio',
  expiryDate: '04/08/22',
});

console.log(
  `${banana.getDescription()}, el precio total de la compra de las frutas es ${banana.getPrice()} y su fecha de expiración es ${banana.getExpiryDate()}`
);

const lemon = new Fruit({
  name: 'limón',
  quantity: 40,
  price: 500,
  description: 'Limón: fruta verde de forma redonda, rica en vitamina C',
  expiryDate: '11/12/23',
});

console.log(
  `${lemon.getDescription()}, el precio total de la compra de las frutas es ${lemon.getPrice()} y su fecha de expiración es ${lemon.getExpiryDate()}`
);

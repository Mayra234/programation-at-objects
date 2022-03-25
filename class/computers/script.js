const desktop = new Computer({
  brand: 'lenovo',
  serial: '54c8ec498',
  price: 1200000,
  type: 'escritorio',
  color: 'blanco',
});

console.log(
  `El computador de ${desktop.getType()} comprado tuvo un costo de ${desktop.getPrice()}, su serial es ${desktop.getSerial()} y es de color ${desktop.getColor()}`
);

const lactop = new Computer({
  brand: 'apple',
  serial: '798fre54',
  price: 4120000,
  type: 'portatíl',
  color: 'rosa',
});

console.log(
  `El computador ${lactop.getType()} comprado tuvo un costo de ${lactop.getPrice()}, su serial es ${lactop.getSerial()} y es de color ${lactop.getColor()}`
);

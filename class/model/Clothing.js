class Clothing {
  brand;
  typeFabric;
  price;
  quantity;
  colors;

  constructor({ brand, typeFabric, price, quantity, colors }) {
    this.brand = brand;
    this.typeFabric = typeFabric;
    this.price = price;
    this.quantity = quantity;
    this.colors = colors;
  }

  getPrice() {
    return parseFloat(this.price) * parseFloat(this.quantity);
  }

  getColor() {
    return this.colors.join(', ');
  }

  getTypeFabric() {
    return this.typeFabric.join(', ');
  }
}

class Fruit {
  name;
  quantity;
  price;
  description;
  expiryDate;

  constructor({ name, quantity, price, description, expiryDate }) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.description = description;
    this.expiryDate = expiryDate;
  }

  getPrice() {
    return parseFloat(this.price) * parseFloat(this.quantity);
  }

  getDescription() {
    return this.description;
  }

  getExpiryDate() {
    return this.expiryDate;
  }
}

class Computer {
  brand;
  serial;
  price;
  type;
  color;

  constructor({ brand, serial, price, type, color }) {
    this.brand = brand;
    this.serial = serial;
    this.price = price;
    this.type = type;
    this.color = color;
  }

  getPrice() {
    return this.price;
  }

  getColor() {
    return this.color;
  }

  getSerial() {
    return this.serial;
  }

  getType() {
    return this.type;
  }
}

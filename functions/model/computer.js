const computer = ({ brand, serial, price, type, color }) => {
  const getPrice = () => {
    return this.price;
  };

  const getColor = () => {
    return this.color;
  };

  const getSerial = () => {
    return this.serial;
  };

  const getType = () => {
    return this.type;
  };

  return {
    brand,
    serial,
    price,
    type,
    color,
    getPrice,
    getColor,
    getSerial,
    getType,
  };
};

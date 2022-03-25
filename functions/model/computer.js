const computer = ({ brand, serial, price, type, color }) => {
  const getPrice = () => {
    return price;
  };

  const getColor = () => {
    return color;
  };

  const getSerial = () => {
    return serial;
  };

  const getType = () => {
    return type;
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

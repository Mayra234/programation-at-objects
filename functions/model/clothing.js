const clothing = ({ brand, typeFabric, price, quantity, colors }) => {
  const getPrice = () => {
    return parseFloat(this.price) * parseFloat(this.quantity);
  };

  const getColor = () => {
    return this.colors.join(', ');
  };

  const getTypeFabric = () => {
    return this.typeFabric.join(', ');
  };
  return {
    brand,
    typeFabric,
    price,
    quantity,
    colors,
    getPrice,
    getColor,
    getTypeFabric,
  };
};

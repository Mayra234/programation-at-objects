const clothing = ({ brand, typeFabric, price, quantity, colors }) => {
  const getPrice = () => {
    return parseFloat(price) * parseFloat(quantity);
  };

  const getColor = () => {
    return colors.join(', ');
  };

  const getTypeFabric = () => {
    return typeFabric.join(', ');
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

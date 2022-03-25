const fruit = ({ name, quantity, price, description, expiryDate }) => {
  const getPrice = () => {
    return parseFloat(price) * parseFloat(quantity);
  };

  const getDescription = () => {
    return description;
  };

  const getExpiryDate = () => {
    return expiryDate;
  };

  return {
    name,
    quantity,
    price,
    description,
    expiryDate,
    getPrice,
    getDescription,
    getExpiryDate,
  };
};

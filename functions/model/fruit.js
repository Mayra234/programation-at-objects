const fruit = ({ name, quantity, price, description, expiryDate }) => {
  const getPrice = () => {
    return parseFloat(this.price) * parseFloat(this.quantity);
  };

  const getDescription = () => {
    return this.description;
  };

  const getExpiryDate = () => {
    return this.expiryDate;
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

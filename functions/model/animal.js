const animal = ({ typeAnimal, name, group, color, age }) => {
  const getGroup = () => {
    return this.group;
  };

  const getName = () => {
    return this.name;
  };

  const getTypeAnimal = () => {
    return this.typeAnimal;
  };

  const getColor = () => {
    return this.color;
  };

  const getAge = () => {
    return this.age;
  };

  return {
    typeAnimal,
    name,
    group,
    color,
    age,
    getGroup,
    getName,
    getTypeAnimal,
    getColor,
    getAge,
  };
};

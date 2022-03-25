const animal = ({ typeAnimal, name, group, color, age }) => {
  const getGroup = () => {
    return this.group;
  };

  const getName = () => {
    return name;
  };

  const getTypeAnimal = () => {
    return typeAnimal;
  };

  const getColor = () => {
    return color;
  };

  const getAge = () => {
    return age;
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

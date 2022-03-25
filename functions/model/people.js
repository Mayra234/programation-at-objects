const people = ({ name, lastName, id, age, gender }) => {
  const getFullName = () => {
    return this.name + ' ' + this.lastName;
  };

  const getAge = () => {
    return this.age;
  };

  const getId = () => {
    return this.id;
  };
  return { name, lastName, id, age, gender, getFullName, getAge, getId };
};

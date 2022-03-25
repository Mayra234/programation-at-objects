const people = ({ name, lastName, id, age, gender }) => {
  const getFullName = () => {
    return name + ' ' + lastName;
  };

  const getAge = () => {
    return age;
  };

  const getId = () => {
    return id;
  };
  return { name, lastName, id, age, gender, getFullName, getAge, getId };
};

class Animal {
  typeAnimal;
  name;
  group;
  color;
  age;

  constructor({ typeAnimal, name, group, color, age }) {
    this.typeAnimal = typeAnimal;
    this.name = name;
    this.group = group;
    this.color = color;
    this.age = age;
  }

  getGroup() {
    return this.group;
  }

  getName() {
    return this.name;
  }

  getTypeAnimal() {
    return this.typeAnimal;
  }

  getColor() {
    return this.color;
  }

  getAge() {
    return this.age;
  }
}

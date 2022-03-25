class People {
  name;
  lastName;
  id;
  age;
  gender;

  constructor({ name, lastName, id, age, gender }) {
    this.name = name;
    this.lastName = lastName;
    this.id = id;
    this.age = age;
    this.gender = gender;
  }

  getFullName() {
    return this.name + ' ' + this.lastName;
  }

  getAge() {
    return this.age;
  }

  getId() {
    return this.id;
  }
}

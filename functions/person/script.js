const woman = new People({
  name: 'Rosa',
  lastName: 'Rosales',
  id: 79826589,
  age: 50,
  gender: 'mujer',
});

console.log(
  `${woman.getFullName()} identificada con número de cédula ${woman.getId()}, tiene ${woman.getAge()} años de edad.`
);

const man = new People({
  name: 'Mariano',
  lastName: 'Melendez',
  id: 1003668951,
  age: 20,
  gender: 'hombre',
});

console.log(
  `${man.getFullName()} identificado con número de cédula ${man.getId()}, tiene ${man.getAge()} años de edad.`
);

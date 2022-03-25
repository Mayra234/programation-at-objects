const snake = new Animal({
  typeAnimal: 'invertebrado',
  name: 'Lora',
  group: 'vibora',
  color: 'verde',
  age: 3,
});

console.log(
  snake.getName() +
    ' es una ' +
    snake.getGroup() +
    ' de color ' +
    snake.getColor()
);
console.log(snake.getName() + ' es un animal de tipo ' + snake.getTypeAnimal());
console.log(snake.getName() + ' lleva ' + snake.getAge() + ' meses de vida.');

const lion = new Animal({
  typeAnimal: 'vertebrado',
  name: 'León',
  group: 'Felino',
  color: 'blanco',
  age: 1,
});

console.log(
  lion.getName() + ' es un ' + lion.getGroup() + ' de color ' + lion.getColor()
);
console.log(lion.getName() + ' es un animal de tipo ' + lion.getTypeAnimal());
console.log(lion.getName() + ' lleva ' + lion.getAge() + ' meses de vida.');

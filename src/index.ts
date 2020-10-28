interface Human {
  name: string,
  age: number,
  gender: string,
};

const person = {
  name: 'coffeemori',
  gender: 'male',
  age: 24,
};

const sayHi = (person: Human): void => {
  console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};

sayHi(person);

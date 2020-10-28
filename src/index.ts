const person = 'coffeemori';
const age = 24;
const gender = 'male';

const sayHi = (name: string, age: number, gender: string): void => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(person, age, gender);

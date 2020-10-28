const person = 'coffeemori';
const age = 24;
const gender = 'male';

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
};

sayHi(person, age);

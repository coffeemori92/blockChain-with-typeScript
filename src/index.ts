class Human {
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  public name: string;
  public age: number;
  public gender: string;
}

const human = new Human('coffeemori', 18, 'male');

const sayHi = (person: Human): void => {
  console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
};

sayHi(human);

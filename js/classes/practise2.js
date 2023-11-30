class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  // extends from Pet class so can use Pet's constructor
  constructor(name, age, livesLeft = 9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }
  eat() {
    return `${this.name} is eating!`;
  }
  meow() {
    return "MEOW!";
  }
}

class Dog extends Pet {
  // extends from Pet class so can use Pet's constructor
  eat() {
    return `${this.name} is eating!`;
  }
  bark() {
    return "WOOF!";
  }
}

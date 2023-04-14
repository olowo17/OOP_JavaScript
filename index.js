class Person {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getName = () => {
    return `my name is ${this.name}`;
  };
  getAge = () => {
    return `my age is${this.age}`;
  };
  getAddress = () => {
    return `my address is ${this.address}`;
  };
}

let person1 = new Person("mike", 14, "Magodo - lagos");

class Office extends Person {
  constructor(name, age, address, level, role) {
    super(name, age, address);
    this.role = role;
    this.level = level;
  }

  getlevel = () => `i am at level ${this.level}`;
  getrole = () => `My current role is ${this.role}`;
}

const office1 = new Office("chris", 23, "USA", "manager", "Business Analsyt");

console.log(office1.getAge());
console.log(office1);
console.log(office1.getrole());

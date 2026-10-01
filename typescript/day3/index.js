"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    birthYear;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.birthYear = new Date().getFullYear() - age;
    }
    greet() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const person = new Person("Zia", 25);
person.greet();
//# sourceMappingURL=index.js.map
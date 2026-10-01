"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(5, 5));
function greet(name, greeting) {
    return `${greeting}, ${name}`;
}
console.log(greet("aman", "Hello"));
function greet2(name, greeting = "hello") {
    console.log(`${name}, ${greeting}`);
}
greet2("aman");
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll);
//# sourceMappingURL=index.js.map
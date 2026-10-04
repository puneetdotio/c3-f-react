"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [
    { id: 1, name: "zia", role: "admin" },
    { id: 2, name: "Gia", role: "user" },
    { id: 3, name: "Noora", role: "guest" },
];
function findUserById(id) {
    return data.find((user) => user.id === id);
}
function logUserDetails(user) {
    console.log(`Name: ${user.name}, Role: ${user.role}`);
}
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const user = findUserById(1);
if (user) {
    logUserDetails(user);
}
const merged = mergeObjects({ id: 4, name: "Mariyz", role: "user" }, { age: 30 });
console.log(merged);
//# sourceMappingURL=index.js.map
const users = [
    { name: "Puneet", age: 22 },
    { name: "aman", age: 23 },
];
function firstItem(items) {
    return items[0];
}
const firstUser = firstItem(users);
console.log(firstUser);
console.log(firstUser.name);
console.log(firstUser.age);
function pair(first, second) {
    return {
        first,
        second,
    };
}
const result = pair("Puneet", 22);
console.log(result);
const result2 = pair(true, "Hello");
console.log(result2);
export {};
//# sourceMappingURL=index.js.map
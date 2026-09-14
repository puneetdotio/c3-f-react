function showPerson(person) {
    if (person.role === "admin") {
        console.log(person.permissions);
    }
    else {
        console.log(person.name);
    }
}
let user1 = {
    role: "user",
    name: "aman",
    age: 22,
};
let admin1 = {
    role: "admin",
    name: "purav",
    age: 23,
    permissions: ["edit", "delete"],
};
showPerson(user1);
showPerson(admin1);
export {};
//# sourceMappingURL=index.js.map
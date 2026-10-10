import { addUser,getUser } from "./user.js";

addUser({id: 1, name: "Jeema",email: "jeema@example.com"})
addUser({id: 2, name: "Ali", email: "ali@example.com"})

console.log(getUser(1))
console.log(getUser(2))
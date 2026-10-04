"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function signContract(employee) {
    console.log(`Signed a contract with ${employee.name} (${employee.email}) having credit ${employee.credit}`);
}
const newEmployee = {
    name: "Besma",
    credit: 750,
    id: 101,
    email: "besma@example.com",
};
signContract(newEmployee);
//# sourceMappingURL=index.js.map
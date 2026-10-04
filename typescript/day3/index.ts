interface BussinesPartner {
    name: string;
    credit: number;
}

interface Identity{
    id: number;
    email: string;
}

function signContract(employee: BussinesPartner & Identity) {
    console.log(`Signed a contract with ${employee.name} (${employee.email}) having credit ${employee.credit}`)
}

const newEmployee: BussinesPartner & Identity = {
    name: "Besma",
    credit: 750,
    id: 101,
    email: "besma@example.com",
}

signContract(newEmployee);
type User = {
	id: number;
	name: string;
	role: "admin" | "user" | "guest";
};

const data: User[] = [
	{ id: 1, name: "zia", role: "admin" },
	{ id: 2, name: "Gia", role: "user" },
	{ id: 3, name: "Noora", role: "guest" },
];

function findUserById(id: number): User | undefined {
	return data.find((user) => user.id === id);
}

function logUserDetails(user: User): void {
	console.log(`Name: ${user.name}, Role: ${user.role}`);
}

type MergeObject = User & { age: number };

function mergeObjects(obj1: User, obj2: { age: number }): MergeObject {
	return { ...obj1, ...obj2 };
}

const user = findUserById(1);
if (user) {
	logUserDetails(user);
}

const merged = mergeObjects(
	{ id: 4, name: "Mariyz", role: "user" },
	{ age: 30 },
);
console.log(merged);

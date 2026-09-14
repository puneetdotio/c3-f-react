type User = {
	role: "user";
	name: string;
	age: number;
};

type Admin = {
	role: "admin";
	name: string;
	age: number;
	permissions: string[];
};

type Person = User | Admin;

function showPerson(person: Person) {
	if (person.role === "admin") {
		console.log(person.permissions);
	} else {
		console.log(person.name);
	}
}

let user1: User = {
	role: "user",
	name: "aman",
	age: 22,
};

let admin1: Admin = {
	role: "admin",
	name: "purav",
	age: 23,
	permissions: ["edit", "delete"],
};

showPerson(user1);
showPerson(admin1);

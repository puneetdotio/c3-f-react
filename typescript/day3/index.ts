type User = {
	name: string;
	age: number;
};

const users: User[] = [
	{
		name: "aman",
		age: 33,
	},
];

function firstItem<T>(items: T[]): T {
	return items[0];
}

const result = firstItem(users);
console.log(result);

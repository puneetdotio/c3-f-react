import type { User } from "./types.js";

const users: User[] = [];

export function addUser(user: User): void {
	users.push(user);
}

export function getUser(id: number): User | string {
	const user = users.find((u) => u.id === id);

	if (user) {
		return user;
	} else {
		return "User not found";
	}
}

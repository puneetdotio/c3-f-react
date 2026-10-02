interface Greetable {
	greet(): void;
}

class Developer implements Greetable {
	constructor(public username: string) {}

	greet(): void {
		console.log(`Hello I am ${this.username} and I love to Code ! `);
	}
}

const dev = new Developer("TS Lover");
dev.greet();

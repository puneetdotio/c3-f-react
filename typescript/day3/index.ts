function add(a: number, b: number): number {
	return a + b;
}

console.log(add(5, 5));

function greet(name: string, greeting?: string): string {
	return `${greeting}, ${name}`;
}

console.log(greet("aman", "Hello"));

function greet2(name: string, greeting: string = "hello"): void {
	console.log(`${name}, ${greeting}`);
}

greet2("aman");

function sumAll(...numbers: number[]): number {
	return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll);

function getValue(value: string): string {
	return value;
}

const result = getValue("Puneet");
console.log(result);

function getValue2(value: number): number {
	return value;
}

const result2 = getValue2(4545);
console.log(result2);

function identity<T>(value: T): T{
    return value;
}

const result3 = identity("Puneet")
console.log(result3)

const result4 = identity(2143432)
console.log(result4)

function identity2(value: string | number): string | number{
    return value;
}

const result5 = identity2("Aman")
console.log(result5)

const result6 = identity2(687364313)
console.log(result6)

const names : string[] = ["Puneet", "Aman"]

const names2 : Array<string> = ["Raghav", "Pawan"]


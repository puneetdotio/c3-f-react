function getValue(value: string) {
    return value;
}

const result = getValue("Puneet");

console.log(result);

function getNumber(value: number): number {
    return value;
}

const numResult = getNumber(77);
console.log(numResult);

// generics
function identity<T>(value: T): T{
    return value;
}

console.log(identity("puneet"))
console.log(identity(880))
console.log(identity(true))
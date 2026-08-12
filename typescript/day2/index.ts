let a: string = "hello";
a = "pol";
a = "bye";
console.log(a);

let val: string = "shubham";

// boolean

let val2: boolean = true;

//number
let val3: number = 3;

// undefined
let h: undefined = undefined;

// bigInt
let g: bigint = 5646546465n;

// symbol

let y: symbol = Symbol("hello");

console.log("arrays tuples");

// unknown
// let faz:unknown = "fazail"
// console.log(faz.toUpperCase())

// let y: never;

// arrays

let arr: number[] = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 0];

let arr1: string[] = ["jio", "pol", "john"];

let arrBol: boolean[] = [true, false, true, true, false];

// tuples

let arr2: [number, number, string, boolean] = [56, 38, "pawan", true];

let data: any[] = [{ name: "pol" }, { name: "pol" }, { name: "pol" }];

// enums - options

enum Role {
	ADMIN,
	SUP_ADMIN,
	USER,
}

let role: Role = Role.USER;

// union
let yolo: string | number = "Rahul";
yolo = 90;

// literals
type Status = "pending" | "success" | "error";

let status: Status = "pending";

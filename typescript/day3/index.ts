// any

let value1: any = "aman";

value1 = 23;
value1 = []
value1 = {}

let value2: unknown = "Puneet";

if (typeof value2 === "string") {
    console.log(value2.toUpperCase())
}

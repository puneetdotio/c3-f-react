
/* generics function with array */
// without generics
function firstItem(items: any[]) {
    return items[0]
}

const result = firstItem(["Punnet", "Raghav"])
console.log(result)

// with generics
function firstItem2<T>(items: T[]): T{
    return items[0]
}

const result2 = firstItem2(["Aman", "Pawan"])
console.log(result2)

const result3 = firstItem2([1,2,3,4,5])
console.log(result3)


let sum = (...rest) => {
    let data = rest.reduce((a, v) => a + v, 0);
    return data;
};
let res = sum(2341, 534, 23, 1, 23, 435, 6565, 67);
console.log(res);
export {};
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Developer {
    username;
    constructor(username) {
        this.username = username;
    }
    greet() {
        console.log(`Hello I am ${this.username} and I love to code!`);
    }
}
const dev = new Developer("TS lover");
dev.greet();
//# sourceMappingURL=index.js.map
let Stack = require("./stack.js");

let stack0 = new Stack();

console.log(stack0.isEmpty());

stack0.initStack([1, 2, 3, 4, 5])

console.log(stack0.pop());

stack0.push(6);

console.log(stack0.empty())
let hashMap = require("./hashMap.js");

let map0 = new hashMap();

console.log(map0.ifExit("age"));

map0.setValue("age", 18);

console.log(map0.ifExit("age"), map0.getValue("age"))
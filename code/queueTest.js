let Queue = require("./queue.js");


let queue0 = new Queue();

console.log(queue0.isEmpty()) //检验队列是否为空

queue0.initQueue([1, 2, 3, 4, 5, 6, 7])

console.log(queue0.getLength()); //获取队列的长度

console.log(queue0.isEmpty());

console.log(queue0.del());

queue0.insert(1);

console.log(queue0.del())

console.log(queue0.empty())
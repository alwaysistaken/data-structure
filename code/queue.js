//队列的主要方法 ： 入队、出队、根据index查询队列元素、获取队列长度，根据数组直接创建队列,打印队列

class Queue {

    queue = [];

    //根据数组初始化队列
    initQueue = function(Array) {

        Array.forEach(element => {
            this.queue.unshift(element);
        });

        return this.queue;
    }

    isEmpty = function() {
        if (this.queue.length == 0) return true;
        return false
    }

    getLength = function() {
        return this.queue.length;
    }

    insert = function(element) {
        this.queue.unshift(element);
    }

    del = function() {
        return this.queue.pop();
    }

    empty = function() {
        let arr = [];
        while (this.queue.length !== 0) {
            arr.push(this.queue.pop());
        }
        return arr;
    }
}


module.exports = Queue
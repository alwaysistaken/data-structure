//栈的主要功能 ：查看是否为空，出栈入栈

class Stack {
    stack = [];

    isEmpty = function() {
        if (this.stack.length == 0) return true;
        return false;
    }

    getLength = function() {
        return this.stack.length;
    }

    push = function(element) {
        this.stack.push(element);
    }

    pop = function() {
        return this.stack.pop();
    }

    empty = function() {
        let arr = [];
        while (this.stack.length !== 0) {
            arr.push(this.stack.pop());
        }
        return arr;
    }

    initStack = function(array) {
        array.forEach(element => {
            this.stack.push(element)
        });
    }

}

module.exports = Stack;
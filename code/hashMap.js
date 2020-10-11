//哈希表主要方法 ：查询某key是否存在 获取设置某key的值 
class HashMap {
    map = {};

    ifExit = function(key) {
        if (this.map.key === undefined) return false;
        return true;
    }

    getValue = function(key) {
        return this.map.key;
    }

    setValue = function(key, value) {
        this.map.key = value;
    }

}

module.exports = HashMap;
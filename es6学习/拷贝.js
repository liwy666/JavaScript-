/**浅拷贝*/
/*1、只拷贝一层，更深层次的对象级别只拷贝引用
* */
var o = {
    name: "aa",
    age: 14,
    msg: {
        a: 1,
        b: 2,
    }
};
var o2 = null;
for (var key in o) {
    o2[key] = o[key];
}
var o3 = null;
Object.assign(o3, o);

/**深拷贝*/
function deepCopy(newObject, object) {
    for (var key in object) {
        var item = object[key];
        if (item instanceof Array) {
            item[key] = [];
            deepCopy(item[key], object[key]);
        } else if (item instanceof Object) {
            item[key] = null;
            deepCopy(item[key], Object[key])
        } else {
            newObject[key] = item;
        }
    }
}

var o4 = null;
deepCopy(o4, o);
Object.create()
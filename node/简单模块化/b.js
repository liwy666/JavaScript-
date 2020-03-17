console.log('b文件被加载了');
module.exports.foo = "add";
module.exports.add = function (x, y) {
    console.log(x + y);
};
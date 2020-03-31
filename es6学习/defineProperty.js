var object;
/** [[Configurable]]：能否delete 删除、能否修改属性的特性、默认false
 * [[Enumerable]]：能否通过 for-in 循环返回属性、默认false
 *[[Writable]]:能否修改属性值，默认true
 * [[Value]]：包含这个属性的数据值,默认undefined*/
Object.defineProperty(object, "name", {
    value: "test",
    writable: true,//能否修改属性值
    enumerable: false,//能否通过 for-in 循环返回属性
    configurable: false,//能否delete 删除、能否修改属性的特性
});

delete object.name; //无法删除
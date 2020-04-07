/**基本步骤*/
/*创建promise对象*/
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let msg = "data";
        //如果异步成功，修改promise状态为---fullfilled;
        resolve(msg);
        //如果异步状态失败,修改promise状态---rejected;
        reject("error");
    }, 2000);
});
/**promise对象的三个状态
 * pending:初始化状态
 * fullfilled:成功状态
 * rejected：失败状态
 * */
promise()
    .then((msg) => {
        console.log(msg);
    }).catch((error) => {
    console.log(error);
});
/**当promise对象的状态变为成功||失败的时候会自动调用then方法中的回调函数*/


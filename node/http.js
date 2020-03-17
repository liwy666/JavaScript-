var http = require('http');
//使用http.createServer()创建web服务，返回Server实例
var server = http.createServer();
//注册响应请求方法
server.on('request', function (request, response) {
    console.log("收到请求");
    //获取请求数据
    console.log("请求路径为：" + request.url);
    //响应
    response.write("hello");
    response.end();
    //也可以
    response.end("hello");
});
//启动服务
server.listen(3000, function () {
    console.log("启动服务成功");
});
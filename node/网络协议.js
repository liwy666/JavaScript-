/**端口号*/
//范围0-65536
/**响应头*/
//Content-Type告诉客户端响应内容类型
//text/plain: 普通文本
//text/html:标签文本
let http = require('http');
let server = http.createServer();
server.on('request', function (request, respons) {
    respons.setHeader('Content-Type', 'text/plain; charset=utf-8');
    respons.end("hello");
});
server.listen(3000, function () {
    console.log("启动服务成功");
});
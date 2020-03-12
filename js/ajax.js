/*ie7之前创建xhr对象*/
function createXHR(){
    if (typeof arguments.callee.activeXString != "string"){
        var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                "MSXML2.XMLHttp"],
            i, len;
        for (i=0,len=versions.length; i < len; i++){
            try {
                new ActiveXObject(versions[i]);
                arguments.callee.activeXString = versions[i];
                break;
            } catch (ex){
//跳过
            }
        }
    }
    return new ActiveXObject(arguments.callee.activeXString);
}
/*ie7之后创建xhr对象*/
function ie7AfterCreateXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = [ "MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                    "MSXML2.XMLHttp"],
                i, len;
            for (i=0,len=versions.length; i < len; i++){
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex){
//跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}

var xhr = ie7AfterCreateXHR();
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    }
};
xhr.open("get","get.php",false);
xhr.timeout = 1000; //将超时设置为 1 秒钟（仅适用于 IE8+）
xhr.setRequestHeader("MyHeader", "MyValue");//自定义请求头
xhr.send(null);
xhr.responseText;//作为响应主体被返回的文本
xhr.responseXML;//果响应的内容类型是"text/xml"或"application/xml"，这个属性中将保存包含着响应数据的 XML DOM 文档。
xhr.status;//响应的 HTTP 状态
xhr.readyState;//请求响应过程的当前活动阶段
// 0：未初始化。尚未调用 open()方法。
// 1：启动。已经调用 open()方法，但尚未调用 send()方法。
// 2：发送。已经调用 send()方法，但尚未接收到响应。
// 3：接收。已经接收到部分响应数据。
// 4：完成。已经接收到全部响应数据，而且已经可以在客户端使用了
xhr.statusText;//HTTP 状态的说明
//xhr.abort();//取消异步请求

/*跨域请求*/
/*
XDR:
1.cookie 不会随请求发送，也不会随响应返回。
2.只能设置请求头部信息中的 Content-Type 字段。
3.不能访问响应头部信息。
4.只支持 GET 和 POST 请求。*/
var xdr = new XDomainRequest();
xdr.onload = function(){
    alert(xdr.responseText);
};
xdr.open("post", "http://www.somewhere-else.com/page/");
xdr.contentType = "application/x-www-form-urlencoded";
xdr.send("name1=value1&name2=value2");
/*JSONP*/
function handleResponse(response){
    alert("You’ re at IP address " + response.ip + ", which is in " +
        response.city + ", " + response.region_name);
}
var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);

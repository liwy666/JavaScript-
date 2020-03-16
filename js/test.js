var pubvar = 1;
function pub () {
    var pravar = 2;
    return pubvar + pravar;
}
console.log(pub(2));
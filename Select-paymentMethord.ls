function myFunctionbank() {
 var backnMessage = document.getElementById("paymentyMethord").value;
document.getElementById("testhere").innerHTML = backnMessage;


var gy = document.getElementById("testhere").innerHTML;
var checkBT = gy.match("Bank-T")
var chcekOnline = gy.match("Online-Payment")
var codx = gy.match("COD")

if (checkBT) {
document.getElementById("OnlineB").setAttribute("style", "display:none;");
document.getElementById("codMess").setAttribute("style", "display:none;");
document.getElementById("paymentOp").setAttribute("style", "display:block;");
document.getElementById("adressName").setAttribute("style", "display:block;");
document.getElementById("testhere").setAttribute("style", "display:block;");
document.getElementById("bacnkTrans").setAttribute("style", "display:block;");
}else if (chcekOnline){
document.getElementById("OnlineB").setAttribute("style", "display:inline-grid;");
document.getElementById("bacnkTrans").setAttribute("style", "display:none;");
document.getElementById("codMess").setAttribute("style", "display:none;");
document.getElementById("paymentOp").setAttribute("style", "display:block;");
document.getElementById("adressName").setAttribute("style", "display:block;");
document.querySelectorAll("#paymentOp")[0].setAttribute("style", "display:none;");
}else{
document.getElementById("bacnkTrans").setAttribute("style", "display:none;");
document.getElementById("OnlineB").setAttribute("style", "display:none;");
document.getElementById("codMess").setAttribute("style", "display:block;");
document.getElementById("paymentOp").setAttribute("style", "display:block;");
document.getElementById("adressName").setAttribute("style", "display:block;");
}
}

var getSizes = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Size-[")[1].split("]")[0];


var gets1 = getSizes.match(35)
var gets2 = getSizes.match(36)
var gets3 = getSizes.match(37)
var gets4 = getSizes.match(38)
var gets5 = getSizes.match(39)
var gets6 = getSizes.match(40)
var gets7 = getSizes.match(41)
var gets8 = getSizes.match(42)
var gets9 = getSizes.match(43)
var gets10 = getSizes.match(44)
var gets11 = getSizes.match(45)
var gets12 = getSizes.match("S")
var gets13 = getSizes.match("L")
var gets14 = getSizes.match("M_")
var gets15 = getSizes.match("X_")
var gets16 = getSizes.match("XX")
var gets16 = getSizes.match("XX")
getSizes.match("110") ? document.querySelectorAll("#siz110CM")[0].style.display= "unset" : document.querySelectorAll("#siz110CM")[0].style.display= "none";
getSizes.match("115") ? document.querySelectorAll("#siz115CM")[0].style.display= "unset" : document.querySelectorAll("#siz115CM")[0].style.display= "none";
getSizes.match("120") ? document.querySelectorAll("#siz120CM")[0].style.display= "unset" : document.querySelectorAll("#siz120CM")[0].style.display= "none";
getSizes.match("125") ? document.querySelectorAll("#siz125CM")[0].style.display= "unset" : document.querySelectorAll("#siz125CM")[0].style.display= "none";
getSizes.match("130") ? document.querySelectorAll("#siz130CM")[0].style.display= "unset" : document.querySelectorAll("#siz130CM")[0].style.display= "none";
getSizes.match("135") ? document.querySelectorAll("#siz135CM")[0].style.display= "unset" : document.querySelectorAll("#siz135CM")[0].style.display= "none";
getSizes.match("140") ? document.querySelectorAll("#siz140CM")[0].style.display= "unset" : document.querySelectorAll("#siz140CM")[0].style.display= "none";
getSizes.match("145") ? document.querySelectorAll("#siz145CM")[0].style.display= "unset" : document.querySelectorAll("#siz145CM")[0].style.display= "none";
getSizes.match("150") ? document.querySelectorAll("#siz150CM")[0].style.display= "unset" : document.querySelectorAll("#siz150CM")[0].style.display= "none";
getSizes.match("155") ? document.querySelectorAll("#siz155CM")[0].style.display= "unset" : document.querySelectorAll("#siz155CM")[0].style.display= "none";
getSizes.match("160") ? document.querySelectorAll("#siz160CM")[0].style.display= "unset" : document.querySelectorAll("#siz160CM")[0].style.display= "none";
getSizes.match(/\b30\b/) ? document.querySelectorAll("#siz30")[0].style.display = "unset" : document.querySelectorAll("#siz30")[0].style.display = "none";
getSizes.match("31") ? document.querySelectorAll("#siz31")[0].style.display= "unset" : document.querySelectorAll("#siz31")[0].style.display= "none";
getSizes.match("32") ? document.querySelectorAll("#siz32")[0].style.display= "unset" : document.querySelectorAll("#siz32")[0].style.display= "none";
getSizes.match("33") ? document.querySelectorAll("#siz33")[0].style.display= "unset" : document.querySelectorAll("#siz33")[0].style.display= "none";
getSizes.match("34") ? document.querySelectorAll("#siz34")[0].style.display= "unset" : document.querySelectorAll("#siz34")[0].style.display= "none";

var getmatchSiz = getSizes.match(/[0-9]|[A-Z]/)

if (gets1){
document.querySelectorAll("#siz35")[0].style.display = "unset";
} else if  (!gets1) {
document.querySelectorAll("#siz35")[0].style.display = "none";
}
if (gets2){
document.querySelectorAll("#siz36")[0].style.display = "unset";
} else if  (!gets2) {
document.querySelectorAll("#siz36")[0].style.display = "none";
}
if (gets3){
document.querySelectorAll("#siz37")[0].style.display = "unset";
} else if  (!gets3) {
document.querySelectorAll("#siz37")[0].style.display = "none";
}
if (gets4){
document.querySelectorAll("#siz38")[0].style.display = "unset";
} else if  (!gets4) {
document.querySelectorAll("#siz38")[0].style.display = "none";
}
if (gets5){
document.querySelectorAll("#siz39")[0].style.display = "unset";
} else if  (!gets5) {
document.querySelectorAll("#siz39")[0].style.display = "none";
}
if (gets6){
document.querySelectorAll("#siz40")[0].style.display = "unset";
} else if  (!gets6) {
document.querySelectorAll("#siz40")[0].style.display = "none";
}
if (gets7){
document.querySelectorAll("#siz41")[0].style.display = "unset";
} else if  (!gets7) {
document.querySelectorAll("#siz41")[0].style.display = "none";
}
if (gets8){
document.querySelectorAll("#siz42")[0].style.display = "unset";
} else if  (!gets8) {
document.querySelectorAll("#siz42")[0].style.display = "none";
}
if (gets9){
document.querySelectorAll("#siz43")[0].style.display = "unset";
} else if  (!gets9) {
document.querySelectorAll("#siz43")[0].style.display = "none";
}
if (gets10){
document.querySelectorAll("#siz44")[0].style.display = "unset";
} else if  (!gets10) {
document.querySelectorAll("#siz44")[0].style.display = "none";
}
if (gets11){
document.querySelectorAll("#siz45")[0].style.display = "unset";
} else if  (!gets11) {
document.querySelectorAll("#siz45")[0].style.display = "none";
}
if (gets12){
document.querySelectorAll("#sizS")[0].style.display = "unset";
} else if  (!gets12) {
document.querySelectorAll("#sizS")[0].style.display = "none";
}
if (gets13){
document.querySelectorAll("#sizL")[0].style.display = "unset";
} else if  (!gets13) {
document.querySelectorAll("#sizL")[0].style.display = "none";
}
if (gets14){
document.querySelectorAll("#sizM")[0].style.display = "unset";
} else if  (!gets14) {
document.querySelectorAll("#sizM")[0].style.display = "none";
}
if (gets15){
document.querySelectorAll("#sizXL")[0].style.display = "unset";
} else if  (!gets15) {
document.querySelectorAll("#sizXL")[0].style.display = "none";
}
if (gets16){
document.querySelectorAll("#sizXXL")[0].style.display = "unset";
} else if  (!gets16) {
document.querySelectorAll("#sizXXL")[0].style.display = "none";
}

if (getmatchSiz){
document.querySelectorAll(".size-container")[0].style.display = "unset";
}else if (!getmatchSiz){
document.querySelectorAll(".size-container")[0].style.display = "none";
}
 

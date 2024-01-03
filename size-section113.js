var getInfo11 = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Size-[")[1].split("]")[0];
var getInfo112 = getInfo11.slice(0, 3);

if (getInfo112.match("115")){
document.querySelectorAll("#disPlaySize")[0].innerHTML ="115CM";
document.querySelectorAll("#size-display-new")[0].innerHTML ="115CM";
 document.querySelectorAll("#siz115CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz115CM")[0].setAttribute("class", "size active");
 } else if (getInfo112.match("125")){
document.querySelectorAll("#disPlaySize")[0].innerHTML ="125CM";
document.querySelectorAll("#size-display-new")[0].innerHTML ="125CM";
 document.querySelectorAll("#siz125CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz125CM")[0].setAttribute("class", "size active");
 } else if (getInfo112.match("135")){
document.querySelectorAll("#siz35")[0].style.display= "none";
document.querySelectorAll("#disPlaySize")[0].innerHTML ="135CM";
document.querySelectorAll("#size-display-new")[0].innerHTML ="135CM";
 document.querySelectorAll("#siz135CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz135CM")[0].setAttribute("class", "size active");
 } else if (getInfo112.match("145")){
document.querySelectorAll("#siz45")[0].style.display= "none";
document.querySelectorAll("#disPlaySize")[0].innerHTML ="145CM";
document.querySelectorAll("#size-display-new")[0].innerHTML ="135CM";
 document.querySelectorAll("#siz145CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz145CM")[0].setAttribute("class", "size active");
 } else if (getInfo112.match("155")){
document.querySelectorAll("#disPlaySize")[0].innerHTML ="155CM";
document.querySelectorAll("#size-display-new")[0].innerHTML ="155CM";
 document.querySelectorAll("#siz155CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz155CM")[0].setAttribute("class", "size active");
 }

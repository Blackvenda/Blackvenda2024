var getInfo1 = getSizes.slice(0, 2);
var getInfo11x = getSizes.slice(0, 3);
document.querySelectorAll("#size-display-new")[0].innerHTML =getInfo1;


if(getInfo1 === "30"){document.querySelectorAll("#siz301")[0].setAttribute("checked", true); document.querySelectorAll("#siz30")[0].setAttribute("class", "size active"); }
else if(getInfo1 === "31"){document.querySelectorAll("#siz311")[0].setAttribute("checked", true); document.querySelectorAll("#siz31")[0].setAttribute("class", "size active"); }
else if(getInfo1 === "32"){document.querySelectorAll("#siz321")[0].setAttribute("checked", true); document.querySelectorAll("#siz32")[0].setAttribute("class", "size active"); }
else if(getInfo1 === "33"){document.querySelectorAll("#siz331")[0].setAttribute("checked", true); document.querySelectorAll("#siz33")[0].setAttribute("class", "size active"); }
else if(getInfo1 === "34"){document.querySelectorAll("#siz341")[0].setAttribute("checked", true); document.querySelectorAll("#siz34")[0].setAttribute("class", "size active"); }
else if (getInfo1 === "39"){
 document.querySelectorAll("#siz391")[0].setAttribute("checked", true);
 document.querySelectorAll("#siz39")[0].setAttribute("class", "size active"); 
 } else if (getInfo1 === "40"){
 document.querySelectorAll("#siz401")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz40")[0].setAttribute("class", "size active"); 
 }else if (getInfo1 === "35"){
 document.querySelectorAll("#siz351")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz35")[0].setAttribute("class", "size active"); 
 }else if (getInfo1 === "36"){
 document.querySelectorAll("#siz361")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz36")[0].setAttribute("class", "size active"); 
 }else if (getInfo1 === "37"){
 document.querySelectorAll("#siz371")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz37")[0].setAttribute("class", "size active"); 
 }else if (getInfo1 === "38"){
 document.querySelectorAll("#siz381")[0].setAttribute("checked", true);
  document.querySelectorAll("#siz38")[0].setAttribute("class", "size active"); 
 }else if (getInfo1 === "41"){
 document.querySelectorAll("#siz411")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz41")[0].setAttribute("class", "size active"); 
 }else if (getInfo1 === "42"){
 document.querySelectorAll("#siz421")[0].setAttribute("checked", true);
  document.querySelectorAll("#siz42")[0].setAttribute("class", "size active"); 
 }else if (getInfo1 === "43"){
 document.querySelectorAll("#siz431")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz43")[0].setAttribute("class", "size active"); 
 }else if (getInfo1 === "44"){
 document.querySelectorAll("#siz441")[0].setAttribute("checked", true);
  document.querySelectorAll("#siz44")[0].setAttribute("class", "size active"); 
 }else if (getInfo1 === "45"){
 document.querySelectorAll("#siz451")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz45")[0].setAttribute("class", "size active"); 
 }else if (getInfo1.match("S")){ 
 document.querySelectorAll("#sizS1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#sizS")[0].setAttribute("class", "size active"); 
 }else if (getInfo1.match("L")){
 document.querySelectorAll("#sizL1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#sizL")[0].setAttribute("class", "size active"); 
 }else if (getInfo1.match("M_")){
document.querySelectorAll("#size-display-new")[0].innerHTML ="M";
 document.querySelectorAll("#sizM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#sizM")[0].setAttribute("class", "size active"); 
 }else if (getInfo1.match("X_")){
document.querySelectorAll("#size-display-new")[0].innerHTML ="XL";
 document.querySelectorAll("#sizXL1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#sizXL")[0].setAttribute("class", "size active"); 
 }else if (getInfo1.match("XX")){
document.querySelectorAll("#size-display-new")[0].innerHTML ="XXL";
 document.querySelectorAll("#sizXXL1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#sizXXL")[0].setAttribute("class", "size active");
 }else if (getInfo1.match("11")){
document.querySelectorAll("#size-display-new")[0].innerHTML ="110CM";
document.querySelectorAll("#disPlaySize")[0].innerHTML ="110CM";
 document.querySelectorAll("#siz110CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz110CM")[0].setAttribute("class", "size active");
 }else if (getInfo1.match("12")){
document.querySelectorAll("#size-display-new")[0].innerHTML ="120CM";
document.querySelectorAll("#disPlaySize")[0].innerHTML ="120CM";
 document.querySelectorAll("#siz120CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz120CM")[0].setAttribute("class", "size active");
 }else if (getInfo1.match("13")){
document.querySelectorAll("#disPlaySize")[0].innerHTML ="130CM";
document.querySelectorAll("#size-display-new")[0].innerHTML ="130CM";
 document.querySelectorAll("#siz130CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz130CM")[0].setAttribute("class", "size active");
 }else if (getInfo1.match("14")){
document.querySelectorAll("#disPlaySize")[0].innerHTML ="140CM";
document.querySelectorAll("#size-display-new")[0].innerHTML ="140CM";
 document.querySelectorAll("#siz140CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz140CM")[0].setAttribute("class", "size active");
 }else if (getInfo1.match("15")){
document.querySelectorAll("#disPlaySize")[0].innerHTML ="150CM";
document.querySelectorAll("#size-display-new")[0].innerHTML ="150CM";
 document.querySelectorAll("#siz150CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz150CM")[0].setAttribute("class", "size active");
 }else if (getInfo1.match("16")){
document.querySelectorAll("#disPlaySize")[0].innerHTML ="160CM";
document.querySelectorAll("#size-display-new")[0].innerHTML ="160CM";
 document.querySelectorAll("#siz160CM1")[0].setAttribute("checked", true); 
  document.querySelectorAll("#siz160CM")[0].setAttribute("class", "size active");
 }
document.querySelectorAll("#disPlaySize")[0].innerHTML ="<b>(Size -"+getInfo1.replace("X_","XL").replace("XX","XXL") +")</b>";


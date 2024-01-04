const checkAvilableqtt = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Quantity-[")[1].split("]")[0];
const availablestk = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Stock Lavel-[")[1].split("]")[0];
const changeQtty = document.querySelectorAll("#quantity")[0];

document.querySelectorAll(".qtyAviBalDis")[0].innerHTML =availablestk;
document.querySelectorAll(".testing")[0].innerHTML =checkAvilableqtt;

if(changeQtty.match("checkAvilableqtt")){
	document.querySelector(".plus-btn").setAttribute("disabled", "disabled");
}

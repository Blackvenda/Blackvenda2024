var modal = document.getElementById("myModal12");
var btn = document.getElementById("myBtn12");
var span = document.getElementsByClassName("close")[0];
var disHEad = document.getElementById("Header1");
var subClose = document.getElementById("paymentOp");

btn.onclick = function() {
			const randomNum = Math.floor(Math.random() * 10000000000); // Generate a random 10-digit number
            const serialNumber = `ID${randomNum.toString().padStart(10, '0')}`;
            var serialNo = serialNumber;
  			document.querySelectorAll("#Oeder-ID")[0].value = serialNumber;
   document.querySelectorAll(".orderIDz")[0].innerHTML ="ORDER ID- <b>" +serialNumber+"</b>";
   document.querySelectorAll("#colorDisplaySee")[0].innerHTML ="<br/> <b>Color - </b>"+document.querySelectorAll("#colorDisplayBew")[0].innerText;
			modal.style.display = "block";
  			disHEad.style.display = "none";


var sizeSelect = document.getElementById("paymentyMethord");
var preSelectedValueCOD = "COD";
var preSelectedValueBankT = "Bank-T";
var preSelectedValueOnlinePayment = "Online-Payment";

// COD Enabled
if (banktrans.match(/n|N/) && onlinetrans.match(/n|N/)) {
	document.getElementById("bacnkTrans").setAttribute("style", "display:none;");
document.getElementById("OnlineB").setAttribute("style", "display:none;");
document.getElementById("codMess").setAttribute("style", "display:block;");
document.getElementById("paymentOp").setAttribute("style", "display:block;");
document.getElementById("adressName").setAttribute("style", "display:block;"); 
document.getElementById("paymentyMethord").setAttribute("style", "display:none;"); 
for (var i = 0; i < sizeSelect.options.length; i++) {
    if (sizeSelect.options[i].value === preSelectedValueCOD) {
        sizeSelect.options[i].selected = true;
        break; 
    }
}
  } else if
// BANK Enabled
  (codtrans.match(/n|N/) && onlinetrans.match(/n|N/)) {
	document.getElementById("OnlineB").setAttribute("style", "display:none;");
document.getElementById("codMess").setAttribute("style", "display:none;");
document.getElementById("paymentOp").setAttribute("style", "display:block;");
document.getElementById("adressName").setAttribute("style", "display:block;");
document.getElementById("testhere").setAttribute("style", "display:block;");
document.getElementById("bacnkTrans").setAttribute("style", "display:block;");
document.getElementById("paymentyMethord").setAttribute("style", "display:none;"); 
for (var i = 0; i < sizeSelect.options.length; i++) {
    if (sizeSelect.options[i].value === preSelectedValueBankT) {
        sizeSelect.options[i].selected = true;
        break; 
    }
}
  }else if 
// Online Payment Enabled
  (codtrans.match(/n|N/) && banktrans.match(/n|N/)) {
document.getElementById("OnlineB").setAttribute("style", "display:inline-grid;");
document.getElementById("bacnkTrans").setAttribute("style", "display:none;");
document.getElementById("codMess").setAttribute("style", "display:none;");
document.getElementById("paymentOp").setAttribute("style", "display:block;");
document.getElementById("adressName").setAttribute("style", "display:block;");
document.querySelectorAll("#paymentOp")[0].setAttribute("style", "display:none;");
document.getElementById("paymentyMethord").setAttribute("style", "display:none;"); 
for (var i = 0; i < sizeSelect.options.length; i++) {
    if (sizeSelect.options[i].value === preSelectedValueOnlinePayment) {
        sizeSelect.options[i].selected = true;
        break; 
    }
}
  } else if 
// Bank Transfer Disabled
  (codtrans.match(/y|Y/) && onlinetrans.match(/y|Y/)) {
	document.getElementById("bacnkTrans").setAttribute("style", "display:none;");
document.getElementById("OnlineB").setAttribute("style", "display:none;");
document.getElementById("codMess").setAttribute("style", "display:block;");
document.getElementById("paymentOp").setAttribute("style", "display:block;");
document.getElementById("adressName").setAttribute("style", "display:block;"); 
  }else if
// Online Payment Disabled  
  (banktrans.match(/y|Y/) && codtrans.match(/y|Y/)) {
	document.getElementById("bacnkTrans").setAttribute("style", "display:none;");
document.getElementById("OnlineB").setAttribute("style", "display:none;");
document.getElementById("codMess").setAttribute("style", "display:block;");
document.getElementById("paymentOp").setAttribute("style", "display:block;");
document.getElementById("adressName").setAttribute("style", "display:block;"); 
  }else if
// COD disabled  
  (banktrans.match(/y|Y/) && onlinetrans.match(/y|Y/)) {
	document.getElementById("OnlineB").setAttribute("style", "display:none;");
document.getElementById("codMess").setAttribute("style", "display:none;");
document.getElementById("paymentOp").setAttribute("style", "display:block;");
document.getElementById("adressName").setAttribute("style", "display:block;");
document.getElementById("testhere").setAttribute("style", "display:block;");
document.getElementById("bacnkTrans").setAttribute("style", "display:block;"); 
document.querySelectorAll(".cashOnDelivery")[0].textContent = 'Bank Transfer';
document.querySelectorAll(".cashOnDelivery")[0].setAttribute("disabled", "disabled");

for (var i = 0; i < sizeSelect.options.length; i++) {
    if (sizeSelect.options[i].value === preSelectedValueBankT) {
        sizeSelect.options[i].selected = true;
        break; 
    }
}
  }  


}
span.onclick = function() {
  modal.style.display = "none";
 disHEad.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    disHEad.style.display = "block";
  }
}

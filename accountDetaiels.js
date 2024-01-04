var getM = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML;
document.querySelectorAll(".modelNor")[0].innerHTML = getM.split("Item Code -[")[1].split("]")[0];

const date = new Date();
const currDate = date.toLocaleDateString();
document.querySelectorAll(".toDateRes")[0].innerHTML = currDate;

function subM() {
    var Mobile1XZ = document.querySelectorAll("#Mobile1")[0].value;
    var tttl = document.querySelectorAll("#ItemFinalTotaleHere")[0].innerHTML;
    var pyMetch = document.querySelectorAll("#paymentyMethord")[0].value;
    var getSno = document.querySelectorAll("#Oeder-ID")[0].value;

    document.querySelectorAll(".refrNoRes")[0].innerHTML = getSno;
    document.querySelectorAll(".orderIDz")[0].innerHTML = "getSno";
    document.querySelectorAll(".totalRes")[0].innerHTML = tttl;
    document.querySelectorAll(".payMenRes")[0].innerHTML = pyMetch;

    if (pyMetch.match("Bank-T")) {
        document.querySelectorAll(".bankTranFin")[0].setAttribute("style", "display:block;");
        document.querySelectorAll(".codFin")[0].setAttribute("style", "display:none;");
        document.querySelectorAll(".payMenRes")[0].innerHTML = "Bank Transfer";
    }
}

const getBankTD = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML;
const banktrans = getBankTD.split("Bank Transfer-[")[1].split("]")[0]
const onlinetrans = getBankTD.split("Online Payment-[")[1].split("]")[0]
const codtrans = getBankTD.split("Cash on Delivery-[")[1].split("]")[0]

if (banktrans.match(/y|Y/)) {
    document.querySelectorAll(".bankTransfer")[0].style.display = "block";
} else if (banktrans.match(/n|N/)) {
    document.querySelectorAll(".bankTransfer")[0].style.display = "none";
}

if (onlinetrans.match(/y|Y/)) {
    document.querySelectorAll(".Online-Payment")[0].style.display = "block";
} else if (onlinetrans.match(/n|N/)) {
    document.querySelectorAll(".Online-Payment")[0].style.display = "none";
}

if (codtrans.match(/y|Y/)) {
    document.querySelectorAll(".cashOnDelivery")[0].style.display = "block";
} else if (codtrans.match(/n|N/)) {
    document.querySelectorAll(".cashOnDelivery")[0].style.display = "none";
}

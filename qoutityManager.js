  let radiBtns = document.querySelectorAll("input[name='Sizes']");
  let result = document.querySelectorAll("#size-display-new")[0];
  var avSiz = document.querySelectorAll(".qtyAviBal")[0].innerHTML;
  var dataFiz = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML;
  document.querySelectorAll(".qtyAviBal")[0].innerHTML = dataFiz.split("Size-[")[1].split("]")[0].split("(")[1].split(")")[0] + " Pieces available";

  document.querySelectorAll("#itemCode")[0].value = dataFiz.split("Item Code -[")[1].split("]")[0] + "-" + getInfo1;

  let findselected = () => {
    let selected = document.querySelector("input[name='Sizes']:checked").value;
    result.textContent = selected;

    if (selected.match(selected)) {
      var ghe = document.querySelectorAll(".qtyAviBal")[0].innerHTML = dataFiz.split(selected + "(")[1].split(")")[0] + " Pieces available";
      document.querySelectorAll("#itemCode")[0].value = dataFiz.split("Item Code -[")[1].split("]")[0] + "-" + selected;
    }

    document.querySelectorAll("#disPlaySize")[0].innerHTML = "<b>(Size - " + selected + ")</b>";
    document.querySelectorAll(".inb old-price efont")[0].innerHTML = "<b>(Size - " + selected + ")</b>";
  };

  radiBtns.forEach(radioBtn => {
    radioBtn.addEventListener("change", findselected);
  });

  function mySizChan() {
    var avSiz = document.querySelectorAll(".qtyAviBal")[0].innerHTML.slice(0, 2);
    const getQttvval = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Quantity-[")[1].split("]")[0];

    if (avSiz.match("1")) {
      document.querySelector(".plus-btn").setAttribute("disabled", "disabled");
      document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
      document.getElementById("quantity").value = "1";
    } else if (avSiz.match(getQttvval)) {
      document.querySelector(".plus-btn").removeAttribute("disabled");
      document.getElementById("quantity").value = getQttvval;
    }
  }


const checkAvilableqtt = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Quantity-[")[1].split("]")[0];
const qttisOne = checkAvilableqtt.match("1")

if(qttisOne){
	document.querySelector(".plus-btn").setAttribute("disabled", "disabled");
}


// Function to set value for an element
function setValue(selector, value) {
    document.querySelectorAll(selector)[0].value = value;
}

// Function to handle size change
function changeSize() {
    const sizes = document.querySelectorAll('.size');
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

// Function to find selected radio button and update result
function findSelected() {
    let selected = document.querySelector("input[name='Sizes']:checked").value;
    document.querySelectorAll("#size-display-new")[0].textContent = selected;
    document.querySelectorAll("#disPlaySize")[0].innerHTML = "<b>(Size - " + selected + ")</b>";
    document.querySelectorAll(".inb old-price efont")[0].innerHTML = "<b>(Size - " + selected + ")</b>";
}

// Function to handle quantity change
function mySizChan() {
    var avSiz = document.querySelectorAll(".qtyAviBal")[0].innerHTML.slice(0, 2);

    if (avSiz.match("1")) {
        document.querySelector(".plus-btn").setAttribute("disabled", "disabled");
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
        document.getElementById("quantity").value = "1";
    } else {
        document.querySelector(".plus-btn").removeAttribute("disabled");
        document.getElementById("quantity").value = "1";
    }

    if (avSiz.match("2")) {
        function clichangeValue() {
            document.querySelector(".plus-btn").setAttribute("disabled", "disabled");
        }
    }
}

// Function to handle price calculation
function priceTotal() {
    var subTotal = valueCount * priceDetailesz;
    var exChrg = 200;

    if (valueCount == 2) {
        var total = valueCount * priceDetailesz + (+GETdilv) + (+exChrg);
        document.querySelectorAll(".get-dil-Price")[0].innerHTML = "LKR." + (+GETdilv + exChrg);
    } else if (valueCount == 3) {
        var total = valueCount * priceDetailesz + (+GETdilv) + (+exChrg) * 2;
        document.querySelectorAll(".get-dil-Price")[0].innerHTML = "LKR." + (+GETdilv + exChrg * 2);
    } else {
        var total = valueCount * priceDetailesz + (+GETdilv);
        document.querySelectorAll(".get-dil-Price")[0].innerHTML = "LKR." + (+GETdilv);
    }

    document.getElementById("ItemFinalTotaleHere").innerText = "LKR." + total;
    document.querySelectorAll("#ItemSubtotaleHere")[0].innerHTML = "LKR." + subTotal;

    document.querySelectorAll("#PriceTag")[0].value = "LKR." + total;
    document.querySelectorAll("#ItemQuntituy")[0].innerHTML = " <b>(x " + valueCount + ")</b>";
}

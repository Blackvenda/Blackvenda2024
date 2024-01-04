document.addEventListener("DOMContentLoaded", function () {
    // Use const and let instead of var
    const radiBtns = document.querySelectorAll("input[name='Sizes']");
    const result = document.querySelector("#size-display-new");
    const qtyAviBal = document.querySelector(".qtyAviBal");
    const itemCodeInput = document.querySelector("#itemCode");
    const contantDetaiels = document.querySelector(".contant-detaiels-here");

    // Extract dataFiz information
    const dataFiz = contantDetaiels.innerHTML;
    const sizePieces = dataFiz.split("Size-[")[1].split("]")[0].split("(")[1].split(")")[0];

    // Update qtyAviBal and itemCodeInput
    qtyAviBal.innerHTML = sizePieces + " Pieces available";
    itemCodeInput.value = dataFiz.split("Item Code -[")[1].split("]")[0] + "-" + getInfo1;

    // Update display size
    document.querySelector("#disPlaySize").innerHTML = "<b>(Size - " + sizePieces + ")</b>";
    document.querySelector(".inb old-price efont").innerHTML = "<b>(Size - " + sizePieces + ")</b>";

    // Function to find selected radio button
    const findSelected = () => {
        const selected = document.querySelector("input[name='Sizes']:checked").value;
        result.textContent = selected;

        // Update qtyAviBal and itemCodeInput based on the selected size
        qtyAviBal.innerHTML = dataFiz.split(selected + "(")[1].split(")")[0] + " Pieces available";
        itemCodeInput.value = dataFiz.split("Item Code -[")[1].split("]")[0] + "-" + selected;

        // Update display size
        document.querySelector("#disPlaySize").innerHTML = "<b>(Size - " + selected + ")</b>";
        document.querySelector(".inb old-price efont").innerHTML = "<b>(Size - " + selected + ")</b>";
    };

    // Add change event listener to radio buttons
    radiBtns.forEach(radioBtn => {
        radioBtn.addEventListener("change", findSelected);
    });

    // Function to handle size change
    function mySizChan() {
        const avSiz = qtyAviBal.innerHTML.slice(0, 2);

        if (avSiz === "1") {
            document.querySelector(".plus-btn").setAttribute("disabled", "disabled");
            document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
            document.getElementById("quantity").value = "1";
        } else {
            document.querySelector(".plus-btn").removeAttribute("disabled");
            document.getElementById("quantity").value = "1";
        }

        if (avSiz === "2") {
            // Add your logic for size 2 here
        }
    }

    // Call mySizChan function
    mySizChan();
});

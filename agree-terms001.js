function submitOrder() {
    // This function can be modified to handle form submission
    alert("Order placed successfully!");
}

document.getElementById("termsCheckbox").addEventListener("change", function() {
    var submitButton = document.getElementById("paymentOp");
    if (this.checked) {
        submitButton.disabled = false;
        alert("Please agree to website Terms of Service");
    } else {
        submitButton.disabled = true;
    }
});

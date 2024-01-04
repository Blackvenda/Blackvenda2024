var getCup = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Coupon Code-[")[1].split("]")[0];
var getCupPers = document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("%[")[1].split("]")[0];
document.querySelectorAll(".discountPersontage")[0].innerHTML ="%" + getCupPers;

function applyCoupon() {
  const couponCode = document.getElementById('couponCode').value;
  const totalAmount = parseFloat(document.getElementById('ItemFinalTotaleHere').textContent.slice(4)); // Extract numeric value
  let discountedAmount = 0;

  // Check if the coupon code is valid and apply the discount accordingly
  if (couponCode === getCup) {
     discountedAmount = totalAmount * (1 - parseFloat(getCupPers) / 100); // Calculate the discounted amount
	 document.querySelectorAll(".mainBoxCoup")[0].style.display ="none";
	 document.querySelectorAll(".totalPz")[0].innerHTML = "Discounted Price"
	 document.querySelectorAll("#TitlteFOr")[0].value = getInfoname + " (Coupon code applied)";
  } else {
    alert('Invalid coupon code. Please try again.');
    return;
  }
  // Update the displayed discounted amount
var discPri = document.getElementById('ItemFinalTotaleHere').textContent = 'LKR.' + discountedAmount.toFixed(2);
document.querySelectorAll("#PriceTag")[0].value =discPri;
}

const cupCheck =document.querySelectorAll(".contant-detaiels-here")[0].innerHTML.split("Coupon Code-[")[1].split("]")[0];

if (cupCheck === "") {
  document.querySelectorAll(".mainBoxCoup")[0].style.display ="none";
}

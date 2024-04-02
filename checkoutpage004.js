// Function to update cart count and total price when page loads
window.onload = function() {
    var cartItemsFromCookies = getFromCookies();
    var cartTotalSpan = document.getElementById("cart-total");
    var totalPriceSpan = document.getElementById("total-price");
    var shippingCostSpan = document.getElementById("shipping-cost");
    var disEmid = document.getElementById("customer-nail-dd").innerHTML;

    if (disEmid) {
        document.getElementById("useremail-id").value = disEmid;
    } else {
        document.getElementById("useremail-id").value = "admin@123";
    }

    // Update cart count
    cartTotalSpan.textContent = cartItemsFromCookies.length;

    // Update cart dropdown
    updateCartDropdown(cartItemsFromCookies);

    // Calculate and display total price
    var total = calculateTotalPrice(cartItemsFromCookies);
    totalPriceSpan.textContent = total;

    document.querySelectorAll("#carttotalPrice")[0].value = total.replaceAll("LKR", "");

    // Update shipping cost
    var shippingCost = calculateShippingCost(cartItemsFromCookies);
    shippingCostSpan.textContent = "LKR " + shippingCost;

    // Populate form fields with cart data
    populateFormFields(cartItemsFromCookies);

    // Check if the cart is empty and display appropriate message
    checkCart();
};

// Function to check if the cart is empty and display/hide elements accordingly
function checkCart() {
    var cartTotal = document.getElementById('cart-total').innerText;
    var emptyCartMsg = document.getElementById('emptycart');
    var orderForm = document.getElementById('cartFormid');
    var cartformNew = document.querySelectorAll(".col-75")[0]
    var cartpriceformNew = document.querySelectorAll(".col-25")[0]

    if (parseInt(cartTotal) === 0) {
        // Cart is empty, display empty cart message and hide form
        emptyCartMsg.style.display = 'block';
        orderForm.style.display = 'none';
        cartformNew.style.display = 'none';
        cartpriceformNew.style.display = 'none';
    } else {
        // Cart has items, hide empty cart message and show form
        emptyCartMsg.style.display = 'none';
        orderForm.style.display = 'block';
        cartformNew.style.display = 'block';
        cartpriceformNew.style.display = 'block';
    }
}

function populateFormFields(cartItems) {
    var itemNames = [];
    var sizes = [];
    var colors = [];
    var itemCodes = [];
    var quantities = [];
    var prices = []; // Add an array for prices
    var pageURLs = [];
    var imgurrs = [];

    // Loop through each item in the cart and extract data
    cartItems.forEach(function(item) {
        itemNames.push(item.productName);
        sizes.push(item.size);
        colors.push(item.color);
        itemCodes.push(item.itemCode);
        quantities.push(item.quantity);
        prices.push(parseFloat(item.price.replace(/[^\d.]/g, "")) * parseInt(item.quantity)); // Calculate total price based on quantity
        pageURLs.push(item.pageURL);
        imgurrs.push(item.imgurr);
    });

// Set values of input fields by joining array values with commas
        document.getElementById("cartItemname").value = itemNames.join(',');
        document.getElementById("cartsize").value = sizes.join(',');
        document.getElementById("cartcolor").value = colors.join(',');
        
        // Concatenate item codes with sizes
        var itemCodesWithSizes = [];
        for (var i = 0; i < itemCodes.length; i++) {
            itemCodesWithSizes.push(itemCodes[i] + '-' + sizes[i]);
        }
        document.getElementById("cartItemcode").value = itemCodesWithSizes.join(',');

        document.getElementById("cartItemqtt").value = quantities.join(',');
        document.getElementById("cartPrice").value = prices.join(','); // Set the value of the price input field
        document.querySelectorAll("#CurrentProductURL")[0].value = pageURLs.join(', ');
        document.querySelectorAll("#cartproductImgUrl")[0].value = imgurrs.join(', ');
}

// Function to calculate total price including shipping and handling
function calculateTotalPrice(cartItems) {
    var total = 0;

    cartItems.forEach(function(item) {
        // Remove any non-numeric characters from the price and convert it to a number
        var itemPrice = parseFloat(item.price.replace(/[^\d.]/g, ""));
        total += itemPrice * parseInt(item.quantity);
    });

    var totalWithShipping = total + calculateShippingCost(cartItems);

    return "LKR " + totalWithShipping.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Function to calculate shipping cost
function calculateShippingCost(cartItems) {
    var baseShippingCost = 401;
    var additionalShippingPerItem = 201;

    return baseShippingCost + (cartItems.length - 1) * additionalShippingPerItem;
}

function updateCartDropdown(cartItems) {
    var cartDropdown = document.getElementById("cart-items");
    cartDropdown.innerHTML = ''; // Clear existing items

    cartItems.forEach(function(item, index) {
        var cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        var totalPrice = parseFloat(item.price) * parseInt(item.quantity); // Calculate total

        var itemNameContainer = document.createElement('span');
        itemNameContainer.classList.add('item-name-container');

        var itemName = document.createElement('span');
        itemName.classList.add('item-name');
        var truncatedName = item.productName.length > 30 ? item.productName.substring(0, 30) + '...' : item.productName;
        itemName.innerHTML = truncatedName + '<br/> <b>x ' + item.quantity +' </b>';

        var itemDetails = document.createElement('span');
        itemDetails.innerHTML = 'Item code - ' + item.itemCode + ' <hr/> Size: ' + item.size + ' <hr/> Color: ' + item.color + ' <hr/> Price: <b>' + totalPrice.toFixed(2) +'</b>';

        var removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.className = 'btnz';
        removeButton.onclick = function() {
            removeFromCart(index);
            location.reload();
        };

        itemNameContainer.appendChild(itemName);
        cartItemDiv.appendChild(itemNameContainer);
        cartItemDiv.appendChild(itemDetails);
        cartItemDiv.appendChild(removeButton);

        cartDropdown.appendChild(cartItemDiv);
    });
}


// Function to remove item from cart
function removeFromCart(index) {
    var existingCartItems = getFromCookies();
    existingCartItems.splice(index, 1);
    saveToCookies(existingCartItems);

    // Update cart count
    var cartTotalSpan = document.getElementById("cart-total");
    cartTotalSpan.textContent = existingCartItems.length;

    // Update cart dropdown
    updateCartDropdown(existingCartItems);

    // Recalculate and display total price
    var totalPriceSpan = document.getElementById("total-price");
    totalPriceSpan.textContent = calculateTotalPrice(existingCartItems);

    // Update shipping cost
    var shippingCostSpan = document.getElementById("shipping-cost");
    shippingCostSpan.textContent = "LKR " + calculateShippingCost(existingCartItems);
}

// Function to retrieve cart data from cookies
function getFromCookies() {
    var name = "cartItems=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return JSON.parse(cookie.substring(name.length, cookie.length));
        }
    }
    return [];
}

// Function to save cart data to cookies
function saveToCookies(cartItems) {
    document.cookie = "cartItems=" + JSON.stringify(cartItems) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

document.getElementById('cartFormid').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycby07VMaw2XLoaohbIDzHlb26KEUORLvYvQia8EpaNa56Tngt3wPthXuK3bkywxceQd5/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            Swal.fire(
                'Thank You!',
                'Your Order Has Been Received!',
                'success'
            )
            console.log(data); // Success message
            // You can redirect or show a success message here

            // Clear cart items from cookies
            document.cookie = "cartItems=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

            // Reload the page to reflect changes
            window.location.reload();
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
});

// Function to cancel and remove items from the cart
function cancel() {
    // Clear cart items from cookies
    document.cookie = "cartItems=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Reload the page to reflect changes
    window.location.reload();
}

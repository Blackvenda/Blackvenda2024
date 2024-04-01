 // Function to add item to cart
    function addToCart() {
        var productName = document.querySelector(".shopping-title").innerText;
        var itemCode = document.querySelector(".modelNor").innerText;
        var price = document.querySelector(".cur-price").innerText.replaceAll("LKR.", "").replaceAll(" ", "");
        var size = document.getElementById("size-display-new").innerText;
        var color = document.getElementById("colorDisplayBew").innerText;
        var quantity = parseInt(document.getElementById("quantity").value);
        var currentPageURL = window.location.href; // Get current page URL

        // Fetch image URL from the natural-thumbnail div
        var imageUrl = getImageUrl();

        var cartItem = {
            productName: productName,
            itemCode: itemCode,
            price: price,
            size: size,
            color: color,
            quantity: quantity,
            pageURL: currentPageURL,
            imgurr: imageUrl // Add current page URL to the cart item
        };

        // Get existing cart items from cookies
        var existingCartItems = getFromCookies();
        existingCartItems.push(cartItem);

        // Save updated cart items to cookies
        saveToCookies(existingCartItems);

        // Update cart icon count
        document.getElementById("addtocart-icon").innerText = existingCartItems.length;

        // Update cart dropdown
        updateCartDropdown(existingCartItems);
    }

    // Function to save cart data to cookies
    function saveToCookies(cartItems) {
        document.cookie = "cartItems=" + JSON.stringify(cartItems) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
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

   // Set current page URL to a form field
            document.getElementById('CurrentProductURL').value = window.location.href;

    // Function to toggle cart dropdown visibility
    function toggleCartDropdown() {
        var cartDropdown = document.getElementById("addtocart-dropdown");
        if (cartDropdown.style.display === "block") {
            cartDropdown.style.display = "none";
        } else {
            cartDropdown.style.display = "block";
        }
    }

    // Function to update cart dropdown with items
    function updateCartDropdown(cartItems) {
        var cartDropdown = document.getElementById("addtocart-dropdown");
        cartDropdown.innerHTML = ''; // Clear existing items

        cartItems.forEach(function(item, index) {
            var cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-itemx');

            var itemName = document.createElement('span');
            itemName.textContent = item.productName + ' - ' + item.itemCode + ' x' + item.quantity;

            var itemDetails = document.createElement('span');
            var totalPrice = parseFloat(item.price) * parseInt(item.quantity); // Calculate total price
            itemDetails.textContent = 'Size: ' + item.size + ', Color: ' + item.color + ', Total Price: LKR ' + totalPrice.toFixed(2); // Display total price

            var removeButton = document.createElement('button');
            removeButton.textContent = 'x';
			removeButton.className = 'btnz';
            removeButton.onclick = function () {
                removeFromCart(index);
				location.reload(); 
            };

            cartItemDiv.appendChild(itemName);
            cartItemDiv.appendChild(itemDetails);
            cartItemDiv.appendChild(removeButton);

            cartDropdown.appendChild(cartItemDiv);
        });

        // Add checkout button
        var checkoutButton = document.createElement('button');
        checkoutButton.textContent = 'Checkout';
        checkoutButton.className = 'btnx';
        checkoutButton.onclick = function () {
            checkout();
        };
        cartDropdown.appendChild(checkoutButton);

        // Add Update button
        var updateButton = document.createElement('button');
        updateButton.textContent = 'Update cart';
        updateButton.className = 'btnz';
        updateButton.onclick = function () {
            updatecart();
        };

        cartDropdown.appendChild(updateButton);
    }

    // Function to remove item from cart
    function removeFromCart(index) {
        var existingCartItems = getFromCookies();
        existingCartItems.splice(index, 1);
        saveToCookies(existingCartItems);
        document.getElementById("addtocart-icon").innerText = existingCartItems.length;
        updateCartDropdown(existingCartItems);
    }

    // Checkout function to redirect to checkout page
    function checkout() {
        // Redirect to checkout page
        window.location.href = "https://www.blackvenda.lk/p/checkout.html"; // Replace "checkout.html" with your actual checkout page URL
    }

    // Update function to Refreshing to checkout page
    function updatecart() {
        // Refresh checkout page
        location.reload();
    }

    // Function to retrieve cart count from cookies and update cart icon
    function updateCartIcon() {
        var cartItemsFromCookies = getFromCookies();
        document.getElementById("addtocart-icon").innerText = cartItemsFromCookies.length;
    }

    // Update cart count and dropdown when page loads
    updateCartIcon();
    var cartItemsFromCookies = getFromCookies();
    updateCartDropdown(cartItemsFromCookies);

    // Function to fetch image URL from the natural-thumbnail div
    function getImageUrl() {
        var divElement = document.querySelector('.natural-thumbnail');

        // Check if the element exists
        if (divElement) {
            // Get the img element within the div
            var imgElement = divElement.querySelector('img');

            // Check if the img element exists
            if (imgElement) {
                // Get the image URL from the src attribute
                var imageUrl = imgElement.getAttribute('src');
                return imageUrl;
            } else {
                console.error('No img element found inside the div.');
            }
        } else {
            console.error('No element found with class "natural-thumbnail".');
        }
    }

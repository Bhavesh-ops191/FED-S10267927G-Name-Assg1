let quantity = 1;

function increaseQuantity() {
    const maxQuantity = parseInt(document.getElementById("MaxQuantity").textContent, 10);
    
    // Check if the current quantity is less than the maximum quantity
    if (quantity < maxQuantity) {
        quantity++;
        document.getElementById("quantity").textContent = quantity;
    }
}


function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("quantity").textContent = quantity;
    }
}

window.onload = function() {
    // Get the stock status from the URL (passed from the homepage or merch page)
    const urlParams = new URLSearchParams(window.location.search);
    const itemStock = urlParams.get("stock"); // This retrieves "True" or "False"

    // Get the stock element to show/hide
    const stockElement = document.querySelector(".stock");
    const soldOutButton = document.querySelector(".sold-out-button");

    // Show or hide "No Stock" based on itemStock value
    if (itemStock === "False") {
        stockElement.style.display = "block";  // Show "No Stock" message
        stockElement.style.color = "red";      // Make sure it's red
        soldOutButton.style.display = "block"; // Show the "Sold Out" button
        soldOutButton.disabled = true;        // Make the "Sold Out" button disabled
        quantity = 0
        document.getElementById("quantity").textContent = quantity;
    } else {
        stockElement.style.display = "none";   // Hide "No Stock" message
        soldOutButton.style.display = "none";  // Hide the "Sold Out" button
        createBuyButton();                     // Create the "Buy" button if in stock
    }
};

// Function to create the "Buy" button when in stock
function createBuyButton() {
    const productInfoDiv = document.querySelector(".product-info");
    const buyButton = document.createElement("button");
    buyButton.innerText = "Buy";
    buyButton.classList.add("buy-button");
    
    buyButton.addEventListener("click", () => {
        alert("Thank you for your purchase!");
        // You can add any functionality here for the actual purchase flow
    });
    
    productInfoDiv.appendChild(buyButton);
}

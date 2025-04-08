// Cart array and localStorage initialization
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add a product to the cart
function addToCart() {
    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(document.getElementById("product-price").value); // Assuming product price input
    const productDescription = document.getElementById("product-description").value; // Assuming product description input

    if (productName && productPrice && productDescription) {
        const product = {
            name: productName,
            price: productPrice,
            description: productDescription
        };

        cart.push(product); // Add product to the cart array
        localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
        alert(`${productName} has been added to your cart!`);
        displayCart(); // Update the cart display
    } else {
        alert("Please enter a valid product name, price, and description.");
    }
}

// Function to display the current cart
function displayCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = ""; // Clear the current list

    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty!</li>";
    } else {
        cart.forEach((product, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${product.name} - $${product.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
            cartList.appendChild(li);
        });
    }
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove product at index
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    displayCart(); // Refresh the cart display
}

// Function to clear the cart (e.g., when checking out)
function clearCart() {
    cart = []; // Empty the cart array
    localStorage.removeItem("cart"); // Remove the cart from localStorage
    alert("Your cart has been cleared.");
    displayCart(); // Update the cart display
}

// Function to calculate the total price of the cart
function calculateTotal() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    document.getElementById("total-price").textContent = `Total: $${total.toFixed(2)}`;
}

// Calling displayCart on page load to show any saved cart items
document.addEventListener("DOMContentLoaded", () => {
    displayCart();
    calculateTotal();
});

// Cart array and localStorage initialization
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to add a product to the cart
function addToCart() {
    const productName = document.getElementById("product-name").value;
    const productPrice = parseFloat(document.getElementById("product-price").value);
    const productDescription = document.getElementById("product-description").value;

    if (productName && productPrice && productDescription) {
        const product = {
            name: productName,
            price: productPrice,
            description: productDescription
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${productName} has been added to your cart!`);
        displayCart();
        calculateTotal();
    } else {
        alert("Please enter a valid product name, price, and description.");
    }
}

// Function to display the current cart
function displayCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty!</li>";
    } else {
        cart.forEach((product, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${product.name}</strong> - $${product.price.toFixed(2)}
                <br><em>${product.description}</em>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartList.appendChild(li);
        });
    }
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
    calculateTotal();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    alert("Your cart has been cleared.");
    displayCart();
    calculateTotal();
}

// Function to calculate the total price of the cart
function calculateTotal() {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    const totalDisplay = document.getElementById("total-price");
    if (totalDisplay) {
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }
}

// On page load: show any saved cart items and total
document.addEventListener("DOMContentLoaded", () => {
    displayCart();
    calculateTotal();
});

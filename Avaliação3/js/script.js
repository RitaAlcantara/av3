
let cart = [];


function addToCart(product, price) {
    cart.push({ product, price });
    alert(`${product} foi adicionado ao carrinho!`);
    updateCart();
}


function updateCart() {
    let cartList = document.getElementById("cartList");
    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.product} - R$${item.price}`;
        cartList.appendChild(li);
    });
}


function checkout() {
    if (cart.length > 0) {
        alert("Compra finalizada com sucesso!");
        cart = [];
        updateCart();
    } else {
        alert("Seu carrinho está vazio.");
    }
}

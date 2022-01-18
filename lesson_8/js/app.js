'use strict';
let cart = new Cart;
document.addEventListener("DOMContentLoaded", loadedPageContent)

function loadedPageContent() {
    loadProductsToPage();
    addEventListenerToCart();
}
function loadProductsToPage() {
    let content = '';
    products.forEach(product => {
        content += getProductMarkup(product, 'clickAddCart');
    });

    let productsBox = document.querySelector('.products__box');
    productsBox.insertAdjacentHTML('afterbegin', content);
}
function addEventListenerToCart() {
    let headerCart = document.querySelector('.header__cart');
    headerCart.addEventListener('mouseover', updateCartSummary);
}

function getProductMarkup(product, cb) {
    return `<article class="products__item">
                <img src="${product.photo}" alt="item_${product.id}">
                <div class="addCart">
                    <button data-id="${product.id}" onclick="${cb}(this)">
                        <img src="./images/cart.svg" alt="add_cart">
                        Add to Cart
                    </button>
                </div>
                <div class="products__item__info">
                    <h3><a href="./product.html">${product.name}</a></h3>
                    <p class="products__item__info__desc">${product.desc}</p>
                    <p class="products__item__info__price price">$${product.price}</p>
                </div>
            </article>`;
}

function clickAddCart(btn) {
    let product = products.find(product => {
        return product.id === +btn.dataset.id;
    });
    
    cart.addItem(product);

    let totalItemsCount = document.querySelector('.header__cart__goods');
    totalItemsCount.textContent = cart.getTotalCount();
}

function updateCartSummary() {
    let cartContent = document.querySelector('.header__cart__summary__content');
    let content = '';
    cart.items.forEach(item => {
        content += getCartItemMarkup(item);
    });
    
    cartContent.innerHTML = '';
    cartContent.insertAdjacentHTML('afterbegin', content);

    let total = document.querySelector('.header__cart__summary__total > span');
    total.textContent = cart.getTotalCost();
}

function getCartItemMarkup(item) {
    return `<div class="header__cart__summary__content__item">
                <div>${item.name}</div>
                <div>${item.count} шт.</div>
                <div>$${item.price}</div>
                <div>$${item.cost}</div>
            </div>`;
}
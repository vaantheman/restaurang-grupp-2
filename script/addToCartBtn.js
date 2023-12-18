import { cartItemsDisplay } from './cartDisplay.js';

export const addToCartButton = (item) => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.innerText = 'add to cart';

    addToCartBtn.addEventListener('click', () => addToStorage(item));

    return addToCartBtn;
};

export const addToStorage = (item) => {
    const cartItem = { name: item.name, price: item.price };
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    cartItemsDisplay();
};

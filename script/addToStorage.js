import { cartItemsDisplay } from './cartDisplay.js';

export const addToStorage = (item) => {
    const cartItem = { name: item.name, price: item.price };
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(cartItem);

    const itemQuantity = cartItems.find((cartItem) => cartItem.name === item.name);
    if (itemQuantity) {
        itemQuantity.quantity = (itemQuantity.quantity || 0) + 1;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    cartItemsDisplay();
};

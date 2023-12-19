import { cartItemsDisplay } from './cartDisplay.js';

export const addToLocalStorage = (item) => {
    const cartItem = { name: item.name, price: item.price };
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(cartItem);

    const itemIndex = cartItems.find((cartItem) => cartItem.name === item.name);

    if (itemIndex) {
        itemIndex.quantity = (itemIndex.quantity || 0) + 1;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    cartItemsDisplay();
};

export const incrementQty = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach((itemName) => {
        const selectedFoodItem = cartItems.find((item) => item.name === itemName.name);
        const itemIndex = cartItems.findIndex((item) => item.name === itemName.name);
        console.log(selectedFoodItem);
        console.log(itemIndex);

        if (cartItems[itemIndex] !== -1 && selectedFoodItem) {
            cartItems[itemIndex].quantity += 1;
        }
    });
    // cartItems.filter((item) => {
    //     const itemQuantity = cartItems.find((cartItem) => cartItem.name === item.name);

    //     console.log(itemQuantity);
    //     if (itemQuantity !== -1 && itemQuantity.name === item.name) {
    //         itemQuantity.quantity = (itemQuantity.quantity || 0) + 1;
    //     }
    // });

    localStorage.setItem('cart', JSON.stringify(cartItems));
    cartItemsDisplay();
};

export const decrementQty = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.forEach((itemName) => {});

    localStorage.setItem('cart', JSON.stringify(cartItems));
    cartItemsDisplay();
};

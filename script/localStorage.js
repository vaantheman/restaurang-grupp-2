import { cartItemsDisplay } from './cartDisplay.js';

export const addToLocalStorage = (item) => {
    const cartItem = { ...item };
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const itemIndex = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemIndex) {
        itemIndex.quantity = (itemIndex.quantity || 0) + 1;
    } else {
        cartItems.push({ ...cartItem, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
    cartItemsDisplay();
};

export const incrementQty = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const existing = cartItems.find((cartItem) => cartItem.name === item.name);

    if (existing) {
        existing.quantity = (existing.quantity || 0) + 1;
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    // cartItems.filter((item) => {
    //     const itemIndex = cartItems.find((cartItem) => cartItem.quantity === item.quantity);
    //     // const selectedFoodItem = cartItems.find((itemName) => itemName.name === item.name);
    //     if (itemIndex !== -1) {
    //         itemIndex.quantity = (itemIndex.quantity || 0) + 1;
    //     }
    // });

    // localStorage.setItem('cart', JSON.stringify(cartItems));
    cartItemsDisplay();
};

export const decrementQty = (item) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    const updated = cartItems
        .map((cartItem) => {
            if (cartItem.name === item.name) {
                const updatedQty = Math.max((cartItem.quantity || 0) - 1, 0);

                if (updatedQty > 0) {
                    return { ...cartItem, quantity: updatedQty };
                }
                return null;
            }
            return cartItem;
        })
        .filter(Boolean);
    localStorage.setItem('cart', JSON.stringify(updated));
    // const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // const existing = cartItems.find((cartItem) => cartItem.name === item.name);

    // if (existing) {
    //     existing.quantity = (existing.quantity || 0) - 1;
    //     localStorage.setItem('cart', JSON.stringify(cartItems));

    //     if (existing.quantity === 0) {
    //         cartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
    //     }
    // }

    // cartItems.filter((item) => {
    //     const itemIndex = cartItems.find((cartItem) => cartItem.quantity === item.quantity);

    //     if (itemIndex !== -1) {
    //         if (itemIndex.quantity > 0) {
    //             itemIndex.quantity = (itemIndex.quantity || 0) - 1;
    //         }
    //     }
    // });

    // localStorage.setItem('cart', JSON.stringify(cartItems));
    cartItemsDisplay();
};

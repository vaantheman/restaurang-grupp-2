import { addToStorage } from './addToStorage.js';

export const addToCartButton = (item) => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.innerText = 'add to cart';

    addToCartBtn.addEventListener('click', () => addToStorage(item));

    return addToCartBtn;
};

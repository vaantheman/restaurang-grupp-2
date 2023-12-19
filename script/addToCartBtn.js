import { addToLocalStorage } from './localStorage.js';

export const addToCartButton = (item) => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.innerText = 'add to cart';

    addToCartBtn.addEventListener('click', () => {
        addToLocalStorage(item);
    });

    return addToCartBtn;
};

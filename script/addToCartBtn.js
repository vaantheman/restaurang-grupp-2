import { addToLocalStorage } from './localStorage.js';

export const addToCartButton = (item) => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.innerText = 'add to cart';

    addToCartBtn.addEventListener('click', () => {
        addToCartBtn.disabled = true;
        addToLocalStorage(item);
    });

    return addToCartBtn;
};

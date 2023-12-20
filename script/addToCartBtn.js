import { addToLocalStorage } from './localStorage.js';

export const addToCartButton = (item) => {
    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'item-container__btn';
    addToCartBtn.innerText = 'Add To Cart';

    addToCartBtn.addEventListener('click', () => {
        addToLocalStorage(item);
    });

    return addToCartBtn;
};

import { incrementQty, decrementQty } from './localStorage.js';

export const incrementButton = (item) => {
    const incrementbtn = document.createElement('button');
    incrementbtn.innerText = '+';
    incrementbtn.className = 'increment-btn';

    incrementbtn.addEventListener('click', () => {
        incrementQty(item);
    });

    return incrementbtn;
};

const decrementButton = (item) => {
    const decrementbtn = document.createElement('button');
    decrementbtn.innerText = '-';
    decrementbtn.className = 'decrement-btn';

    decrementbtn.addEventListener('click', () => {
        decrementQty(item);
    });

    return decrementbtn;
};

const showQuantity = (quantity) => {
    const showQuantity = document.createElement('span');
    showQuantity.className = 'show-quantity';
    showQuantity.innerText = quantity;
    return showQuantity;
};

export const quantitySelector = (item) => {
    const container = document.createElement('div');

    container.appendChild(decrementButton(item));
    container.appendChild(showQuantity(item.quantity));
    container.appendChild(incrementButton(item));
    return container;
};

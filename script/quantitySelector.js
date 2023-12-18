const incrementButton = () => {
    const incrementbtn = document.createElement('button');
    incrementbtn.innerText = '+';
    incrementbtn.className = 'increment-btn';
    return incrementbtn;
};

const decrementButton = () => {
    const decrementbtn = document.createElement('button');
    decrementbtn.innerText = '-';
    decrementbtn.className = 'decrement-btn';
    return decrementbtn;
};

const showQuantity = (qty) => {
    const showQuantity = document.createElement('span');
    showQuantity.innerText = qty;
    return showQuantity;
};

export const quantitySelector = (qty) => {
    const container = document.createElement('div');

    container.appendChild(decrementButton());
    container.appendChild(showQuantity(qty));
    container.appendChild(incrementButton());
    return container;
};

import { quantitySelector } from './quantitySelector.js';

export const cartModal = () => {
    const openButton = document.querySelector('[data-open-modal]');
    const closeButton = document.querySelector('[data-close-modal]');
    const modal = document.querySelector('[data-modal]');

    openButton.addEventListener('click', () => {
        cartItemsDisplay();
        modal.showModal();
    });

    closeButton.addEventListener('click', () => {
        cartItemsDisplay();
        modal.close();
    });
};

export const cartItemsDisplay = () => {
    const storageList = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDisplayWrapper = document.querySelector('[data-modal]');
    const itemsList = document.getElementById('items-list');
    const totalPriceElement = document.getElementById('total-price');

    totalPriceElement.innerHTML = '';
    itemsList.innerHTML = '';

    const hideItemDuplicate = storageList.filter(
        (cartItem, index, array) =>
            index === array.findIndex((element) => element.name === cartItem.name)
    );

    hideItemDuplicate.forEach((storageItem) => {
        const itemsElement = document.createElement('li');
        const totalAmount = (storageItem.quantity * storageItem.price).toFixed(2);
        itemsElement.textContent = `${storageItem.name} - ${totalAmount} kr`;

        const calculateTotalPrice = (items) => {
            return items.reduce((accTotal, currentItem) => accTotal + currentItem.price, 0);
        };
        const totalPrice = calculateTotalPrice(storageList);
        totalPriceElement.innerText = `Total Price: ${totalPrice.toFixed(2)} kr`;

        itemsList.appendChild(itemsElement);
        itemsElement.append(quantitySelector(storageItem.quantity));
        cartDisplayWrapper.appendChild(itemsList);
        cartDisplayWrapper.appendChild(totalPriceElement);
    });
};

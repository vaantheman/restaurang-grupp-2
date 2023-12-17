export const cartModal = () => {
    const openButton = document.querySelector('[data-open-modal]');
    const closeButton = document.querySelector('[data-close-modal]');
    const modal = document.querySelector('[data-modal]');

    openButton.addEventListener('click', () => {
        modal.showModal();
    });

    closeButton.addEventListener('click', () => {
        modal.close();
    });
    cartItemsDisplay();
};

export const cartItemsDisplay = () => {
    const storageList = JSON.parse(localStorage.getItem('cart')) || [];

    const cartDisplayWrapper = document.querySelector('[data-modal]');
    const itemsList = document.getElementById('items-list');
    const totalPriceElement = document.getElementById('total-price');

    itemsList.innerHTML = '';

    storageList.forEach((storageItem) => {
        const itemsElement = document.createElement('li');
        itemsElement.textContent = `${storageItem.name} - ${storageItem.price.toFixed(2)} kr`;

        const calculateTotalPrice = (items) => {
            return items.reduce((accTotal, currentItem) => accTotal + currentItem.price, 0);
        };
        const totalPrice = calculateTotalPrice(storageList);
        totalPriceElement.innerText = `Total Price: ${totalPrice.toFixed(2)} kr`;

        itemsList.appendChild(itemsElement);
        cartDisplayWrapper.appendChild(itemsList);
        cartDisplayWrapper.appendChild(totalPriceElement);
    });
};
